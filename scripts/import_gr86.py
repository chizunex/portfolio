"""
Import and prepare GR86 model for web with interactive parts
"""

import bpy
import os

# Clear existing objects
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# Import the GLTF model
model_path = "/Users/chizune/Desktop/portfolio/public/models/gr86_raw/scene.gltf"
print(f"Importing: {model_path}")
bpy.ops.import_scene.gltf(filepath=model_path)

# List all objects
print("\n=== OBJECTS IN SCENE ===")
for obj in bpy.data.objects:
    print(f"  - {obj.name} (type: {obj.type})")

# Find interactive parts - need to identify doors, hood, trunk
# Let's rename and organize them
interactive_parts = {}

for obj in bpy.data.objects:
    name_lower = obj.name.lower()
    if obj.type == 'MESH':
        # Try to identify parts by name
        if 'door' in name_lower:
            interactive_parts[obj.name] = 'door'
        elif 'hood' in name_lower or 'bonnet' in name_lower:
            interactive_parts[obj.name] = 'hood'
        elif 'trunk' in name_lower or 'boot' in name_lower:
            interactive_parts[obj.name] = 'trunk'
        elif 'wheel' in name_lower or 'tire' in name_lower:
            interactive_parts[obj.name] = 'wheel'

print("\n=== INTERACTIVE PARTS ===")
for name, part_type in interactive_parts.items():
    print(f"  - {name}: {part_type}")

# Export to GLB for web
output_file = "/Users/chizune/Desktop/portfolio/public/models/gr86.glb"

# Select all mesh objects
bpy.ops.object.select_all(action='DESELECT')
for obj in bpy.data.objects:
    if obj.type == 'MESH':
        obj.select_set(True)

print(f"\nExporting to: {output_file}")
bpy.ops.export_scene.gltf(
    filepath=output_file,
    export_format='GLB',
    use_selection=True,
    export_apply=True,
    export_materials='EXPORT'
)

print(f"Done! File size: {os.path.getsize(output_file)} bytes")
