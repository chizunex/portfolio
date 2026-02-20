"""
Import GR86 and save as .blend file for manual editing
"""
import bpy
import os

# Clear existing
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# Import
model_path = "/Users/chizune/Desktop/portfolio/public/models/gr86_raw/scene.gltf"
print(f"Importing: {model_path}")
bpy.ops.import_scene.gltf(filepath=model_path)

# Save as .blend
blend_file = "/Users/chizune/Desktop/portfolio/public/models/gr86.blend"
print(f"Saving: {blend_file}")
bpy.ops.wm.save_as_mainfile(filepath=blend_file)

print("Done!")
