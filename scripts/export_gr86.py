"""
Export GR86 model to GLTF/GLB for web
"""

import bpy
import os

# Set output path
output_dir = "/Users/chizune/Desktop/portfolio/public/models"
os.makedirs(output_dir, exist_ok=True)
output_file = os.path.join(output_dir, "gr86.glb")

# Select only mesh objects (exclude lights and camera for cleaner export)
bpy.ops.object.select_all(action='DESELECT')
for obj in bpy.data.objects:
    if obj.type == 'MESH':
        obj.select_set(True)

# Export to GLB
bpy.ops.export_scene.gltf(
    filepath=output_file,
    export_format='GLB',
    use_selection=True,
    export_apply=True,
    export_materials='EXPORT',
    export_cameras=False,
    export_lights=False
)

print(f"Exported to: {output_file}")
