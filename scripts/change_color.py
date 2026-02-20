"""
Change GR86 body color to white
"""
import bpy

# Import model
model_path = "/Users/chizune/Desktop/portfolio/public/models/gr86_raw/scene.gltf"
print(f"Importing: {model_path}")
bpy.ops.import_scene.gltf(filepath=model_path)

# Find materials that might be body paint (red colors)
white_color = (0.9, 0.9, 0.9, 1.0)

changed_count = 0
for mat in bpy.data.materials:
    if mat.use_nodes:
        nodes = mat.node_tree.nodes
        bsdf = nodes.get("Principled BSDF")
        if bsdf:
            current_color = bsdf.inputs["Base Color"].default_value
            # Check if it's a red/orange paint color (likely body paint)
            if current_color[0] > 0.3 and current_color[1] < 0.3 and current_color[2] < 0.3:
                print(f"Changing {mat.name}: {current_color[:3]} -> white")
                bsdf.inputs["Base Color"].default_value = white_color
                changed_count += 1

print(f"\nChanged {changed_count} materials to white")

# Select all meshes
bpy.ops.object.select_all(action='DESELECT')
for obj in bpy.data.objects:
    if obj.type == 'MESH':
        obj.select_set(True)

# Export
output_file = "/Users/chizune/Desktop/portfolio/public/models/gr86.glb"
print(f"Exporting to: {output_file}")
bpy.ops.export_scene.gltf(
    filepath=output_file,
    export_format='GLB',
    use_selection=True,
    export_apply=True,
    export_materials='EXPORT'
)

print("Done!")
