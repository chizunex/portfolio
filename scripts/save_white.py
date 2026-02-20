"""
Save GR86 with white body as .blend
"""
import bpy

# Import
model_path = "/Users/chizune/Desktop/portfolio/public/models/gr86_raw/scene.gltf"
print(f"Importing: {model_path}")
bpy.ops.import_scene.gltf(filepath=model_path)

# Change body paint to white
white_color = (0.9, 0.9, 0.9, 1.0)
for mat in bpy.data.materials:
    if mat.use_nodes:
        nodes = mat.node_tree.nodes
        bsdf = nodes.get("Principled BSDF")
        if bsdf:
            current_color = bsdf.inputs["Base Color"].default_value
            if current_color[0] > 0.3 and current_color[1] < 0.3 and current_color[2] < 0.3:
                bsdf.inputs["Base Color"].default_value = white_color

# Save .blend
blend_file = "/Users/chizune/Desktop/portfolio/public/models/gr86_white.blend"
print(f"Saving: {blend_file}")
bpy.ops.wm.save_as_mainfile(filepath=blend_file)

print("Done!")
