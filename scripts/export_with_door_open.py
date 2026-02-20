"""
Export GR86 with front door slightly open to test pivot
"""
import bpy
import math

# Import the blend file
blend_file = "/Users/chizune/Desktop/portfolio/public/models/gr86_white.blend"
print(f"Opening: {blend_file}")
bpy.ops.wm.open_mainfile(filepath=blend_file)

# Switch to object mode
bpy.ops.object.mode_set(mode='OBJECT')

# Find and rotate the front left door
door_found = False
for obj in bpy.data.objects:
    if obj.type == 'MESH' and 'Door' in obj.name:
        print(f"Found door: {obj.name}")
        # Select the object
        bpy.ops.object.select_all(action='DESELECT')
        obj.select_set(True)
        bpy.context.view_layer.objects.active = obj
        # Rotate around Y axis (opening outward)
        obj.rotation_euler = (0, math.radians(35), 0)
        door_found = True
        break

if not door_found:
    print("Door not found!")

# Select all meshes
bpy.ops.object.select_all(action='DESELECT')
for obj in bpy.data.objects:
    if obj.type == 'MESH':
        obj.select_set(True)

# Export
output_file = "/Users/chizune/Desktop/portfolio/public/models/gr86_test.glb"
print(f"Exporting to: {output_file}")
bpy.ops.export_scene.gltf(
    filepath=output_file,
    export_format='GLB',
    use_selection=True,
    export_apply=True,
    export_materials='EXPORT'
)

print("Done! Open this file to test if door opens from hinge.")
