"""
List all objects in the GR86 model to identify interactive parts
"""

import bpy

# Import the GLTF model
model_path = "/Users/chizune/Desktop/portfolio/public/models/gr86_raw/scene.gltf"
print(f"Importing: {model_path}")
bpy.ops.import_scene.gltf(filepath=model_path)

# List all objects with their types and approximate locations
print("\n=== ALL OBJECTS ===")
for i, obj in enumerate(bpy.data.objects):
    loc = obj.location
    print(f"{i}: {obj.name} | type: {obj.type} | loc: ({loc.x:.2f}, {loc.y:.2f}, {loc.z:.2f})")

# Also show hierarchy if any
print("\n=== PARENT-CHILD RELATIONSHIPS ===")
for obj in bpy.data.objects:
    if obj.parent:
        print(f"  {obj.name} -> {obj.parent.name}")
