"""
Make GR86 white - explicitly change CAR_Paint
"""
import bpy

# Import
model_path = "/Users/chizune/Desktop/portfolio/public/models/gr86_raw/scene.gltf"
print(f"Importing: {model_path}")
bpy.ops.import_scene.gltf(filepath=model_path)

# Explicitly change CAR_Paint to white
for mat in bpy.data.materials:
    if "CAR_Paint" in mat.name:
        print(f"Found: {mat.name}")
        if mat.use_nodes:
            nodes = mat.node_tree.nodes
            bsdf = nodes.get("Principled BSDF")
            if bsdf:
                print(f"  Old color: {bsdf.inputs['Base Color'].default_value[:3]}")
                bsdf.inputs["Base Color"].default_value = (0.95, 0.95, 0.95, 1.0)
                print(f"  New color: {bsdf.inputs['Base Color'].default_value[:3]}")

# Save .blend
blend_file = "/Users/chizune/Desktop/portfolio/public/models/gr86_white.blend"
print(f"Saving: {blend_file}")
bpy.ops.wm.save_as_mainfile(filepath=blend_file)

# Export GLB
bpy.ops.object.select_all(action='DESELECT')
for obj in bpy.data.objects:
    if obj.type == 'MESH':
        obj.select_set(True)

output_file = "/Users/chizune/Desktop/portfolio/public/models/gr86.glb"
print(f"Exporting: {output_file}")
bpy.ops.export_scene.gltf(
    filepath=output_file,
    export_format='GLB',
    use_selection=True,
    export_apply=True,
    export_materials='EXPORT'
)

print("Done!")
