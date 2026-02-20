"""
Fix GR86 model scale and position for proper viewing
"""
import bpy
import os

# Import the GLTF
model_path = "/Users/chizune/Desktop/portfolio/public/models/gr86_raw/scene.gltf"
print(f"Importing: {model_path}")
bpy.ops.import_scene.gltf(filepath=model_path)

# Get all root objects
root_objects = [obj for obj in bpy.data.objects if obj.parent is None and obj.type == 'MESH']

print(f"\nFound {len(root_objects)} root mesh objects")

# Calculate bounding box
import mathutils

min_x = min_y = min_z = float('inf')
max_x = max_y = max_z = float('-inf')

for obj in root_objects:
    for v in obj.bound_box:
        vec = mathutils.Vector(v)
        world_v = obj.matrix_world @ vec
        min_x = min(min_x, world_v.x)
        max_x = max(max_x, world_v.x)
        min_y = min(min_y, world_v.y)
        max_y = max(max_y, world_v.y)
        min_z = min(min_z, world_v.z)
        max_z = max(max_z, world_v.z)

print(f"Original bounds: X[{min_x:.2f}, {max_x:.2f}], Y[{min_y:.2f}, {max_y:.2f}], Z[{min_z:.2f}, {max_z:.2f}]")

# Calculate center and scale
center_x = (min_x + max_x) / 2
center_y = (min_y + max_y) / 2
center_z = (min_z + max_z) / 2

width = max_x - min_x
depth = max_y - min_y
height = max_z - min_z

print(f"Dimensions: Width={width:.2f}, Depth={depth:.2f}, Height={height:.2f}")

# Move to origin
for obj in root_objects:
    obj.location.x -= center_x
    obj.location.y -= center_y
    obj.location.z -= center_z

print(f"Moved to origin")

# Re-calculate after move
min_z = float('inf')
max_z = float('-inf')
for obj in root_objects:
    for v in obj.bound_box:
        vec = mathutils.Vector(v)
        world_v = obj.matrix_world @ vec
        min_z = min(min_z, world_v.z)
        max_z = max(max_z, world_v.z)

# Move up so bottom is at Z=0
z_offset = -min_z
for obj in root_objects:
    obj.location.z += z_offset

print(f"Moved up by {z_offset:.2f}")

# Check if scale is reasonable (car should be about 4 meters long)
if width < 0.5 or width > 10:
    scale_factor = 4.0 / width
    for obj in root_objects:
        obj.scale = (scale_factor, scale_factor, scale_factor)
    print(f"Scaled by {scale_factor:.2f}")

# Select all mesh objects for export
bpy.ops.object.select_all(action='DESELECT')
for obj in bpy.data.objects:
    if obj.type == 'MESH':
        obj.select_set(True)

# Export
output_file = "/Users/chizune/Desktop/portfolio/public/models/gr86.glb"
print(f"\nExporting to: {output_file}")
bpy.ops.export_scene.gltf(
    filepath=output_file,
    export_format='GLB',
    use_selection=True,
    export_apply=True,
    export_materials='EXPORT'
)

print(f"Done! File size: {os.path.getsize(output_file)} bytes")
