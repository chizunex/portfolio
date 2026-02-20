"""
List all materials in the GR86 model
"""
import bpy

# Import
model_path = "/Users/chizune/Desktop/portfolio/public/models/gr86_raw/scene.gltf"
print(f"Importing: {model_path}")
bpy.ops.import_scene.gltf(filepath=model_path)

# List all materials
print("\n=== MATERIALS ===")
for mat in bpy.data.materials:
    if mat.use_nodes:
        nodes = mat.node_tree.nodes
        bsdf = nodes.get("Principled BSDF")
        if bsdf:
            color = bsdf.inputs["Base Color"].default_value
            print(f"{mat.name}: RGB({color[0]:.2f}, {color[1]:.2f}, {color[2]:.2f})")
