"""
Export final GR86 model from .blend
"""
import bpy

# Open the blend file
blend_file = "/Users/chizune/Desktop/portfolio/public/models/gr86_white.blend"
print(f"Opening: {blend_file}")
bpy.ops.wm.open_mainfile(filepath=blend_file)

# Select all mesh objects
bpy.ops.object.select_all(action='DESELECT')
for obj in bpy.data.objects:
    if obj.type == 'MESH':
        obj.select_set(True)

# Export to GLB
output_file = "/Users/chizune/Desktop/portfolio/public/models/gr86.glb"
print(f"Exporting to: {output_file}")
bpy.ops.export_scene.gltf(
    filepath=output_file,
    export_format='GLB',
    use_selection=True,
    export_apply=True,
    export_materials='EXPORT'
)

import os
print(f"Done! File size: {os.path.getsize(output_file)} bytes")
