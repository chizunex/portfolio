"""
GR86 3D Model Builder for Web Export
Creates a stylized GR86 with separate objects for interactive parts
"""

import bpy
import math
import os

# Clear existing objects
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# Materials
def create_material(name, color, metallic=0.0, roughness=0.5):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    bsdf = nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*color, 1.0)
    bsdf.inputs["Metallic"].default_value = metallic
    bsdf.inputs["Roughness"].default_value = roughness
    return mat

# Colors
GR86_BLUE = (0.1, 0.2, 0.5)  # Subaru Blue
BLACK = (0.02, 0.02, 0.02)
CHROME = (0.8, 0.8, 0.8)
TIRE_DARK = (0.1, 0.1, 0.1)
GLASS = (0.2, 0.3, 0.4)
INTERIOR = (0.05, 0.05, 0.05)

# Create materials
mat_body = create_material("BodyPaint", GR86_BLUE, metallic=0.8, roughness=0.2)
mat_black = create_material("BlackPlastic", BLACK, metallic=0.0, roughness=0.8)
mat_chrome = create_material("Chrome", CHROME, metallic=1.0, roughness=0.1)
mat_tire = create_material("Tire", TIRE_DARK, metallic=0.0, roughness=0.9)
mat_glass = create_material("Glass", GLASS, metallic=0.0, roughness=0.0)
mat_glass.blend_method = 'BLEND'
mat_interior = create_material("Interior", INTERIOR, metallic=0.0, roughness=0.9)

# Dimensions (in meters, realistic scale)
LENGTH = 4.0  # ~4 meters long
WIDTH = 1.8   # ~1.8 meters wide
HEIGHT = 1.3  # ~1.3 meters tall

def create_car_body():
    """Create the main car body (excluding movable parts)"""
    # Main body - lower section
    bpy.ops.mesh.primitive_cube_add(size=1, location=(0, 0, 0))
    body = bpy.context.active_object
    body.name = "Body"

    # Scale to car dimensions
    body.scale = (LENGTH * 0.45, WIDTH * 0.4, HEIGHT * 0.15)
    body.location = (0, 0, HEIGHT * 0.25)

    # Roof section
    bpy.ops.mesh.primitive_cube_add(size=1, location=(0, 0, 0))
    roof = bpy.context.active_object
    roof.name = "Roof"
    roof.scale = (LENGTH * 0.35, WIDTH * 0.35, HEIGHT * 0.25)
    roof.location = (LENGTH * 0.05, 0, HEIGHT * 0.55)

    # Join body parts
    bpy.ops.object.select_all(action='DESELECT')
    body.select_set(True)
    roof.select_set(True)
    bpy.context.view_layer.objects.active = body
    bpy.ops.object.join()
    body.name = "CarBody"

    # Apply material
    body.data.materials.append(mat_body)

    return body

def create_door(name, x_pos, y_pos):
    """Create a single door"""
    bpy.ops.mesh.primitive_cube_add(size=1, location=(x_pos, y_pos, HEIGHT * 0.35))
    door = bpy.context.active_object
    door.name = name
    door.scale = (LENGTH * 0.28, WIDTH * 0.08, HEIGHT * 0.25)
    door.location = (x_pos, y_pos, HEIGHT * 0.35)
    door.data.materials.append(mat_body)

    # Add window
    bpy.ops.mesh.primitive_cube_add(size=1, location=(x_pos, y_pos, HEIGHT * 0.52))
    window = bpy.context.active_object
    window.name = name + "_Window"
    window.scale = (LENGTH * 0.18, WIDTH * 0.02, HEIGHT * 0.15)
    window.data.materials.append(mat_glass)

    # Join door and window
    bpy.ops.object.select_all(action='DESELECT')
    door.select_set(True)
    window.select_set(True)
    bpy.context.view_layer.objects.active = door
    bpy.ops.object.join()
    door.name = name

    return door

def create_hood():
    """Create the hood"""
    bpy.ops.mesh.primitive_cube_add(size=1, location=(0, 0, 0))
    hood = bpy.context.active_object
    hood.name = "Hood"
    hood.scale = (LENGTH * 0.28, WIDTH * 0.38, HEIGHT * 0.05)
    hood.location = (LENGTH * 0.32, 0, HEIGHT * 0.28)
    hood.data.materials.append(mat_body)
    return hood

def create_trunk():
    """Create the trunk"""
    bpy.ops.mesh.primitive_cube_add(size=1, location=(0, 0, 0))
    trunk = bpy.context.active_object
    trunk.name = "Trunk"
    trunk.scale = (LENGTH * 0.2, WIDTH * 0.38, HEIGHT * 0.1)
    trunk.location = (-LENGTH * 0.32, 0, HEIGHT * 0.3)
    trunk.data.materials.append(mat_body)
    return trunk

def create_wheel(name, x, y, z):
    """Create a wheel with tire"""
    # Tire
    bpy.ops.mesh.primitive_torus_add(
        major_radius=0.35,
        minor_radius=0.15,
        location=(x, y, z)
    )
    tire = bpy.context.active_object
    tire.name = name + "_Tire"
    tire.scale = (1, 1, 1)
    tire.rotation_euler = (math.pi/2, 0, 0)
    tire.data.materials.append(mat_tire)

    # Rim
    bpy.ops.mesh.primitive_cylinder_add(
        radius=0.25,
        depth=0.1,
        location=(x, y + (0.16 if y > 0 else -0.16), z)
    )
    rim = bpy.context.active_object
    rim.name = name + "_Rim"
    rim.rotation_euler = (math.pi/2, 0, 0)
    rim.data.materials.append(mat_chrome)

    # Join tire and rim
    bpy.ops.object.select_all(action='DESELECT')
    tire.select_set(True)
    rim.select_set(True)
    bpy.context.view_layer.objects.active = tire
    bpy.ops.object.join()
    tire.name = name

    return tire

def create_wheels():
    """Create all 4 wheels"""
    wheel_positions = [
        ("FL_Wheel", LENGTH * 0.28, WIDTH * 0.22, HEIGHT * 0.35),
        ("FR_Wheel", LENGTH * 0.28, -WIDTH * 0.22, HEIGHT * 0.35),
        ("RL_Wheel", -LENGTH * 0.28, WIDTH * 0.22, HEIGHT * 0.35),
        ("RR_Wheel", -LENGTH * 0.28, -WIDTH * 0.22, HEIGHT * 0.35),
    ]

    wheels = []
    for name, x, y, z in wheel_positions:
        wheel = create_wheel(name, x, y, z)
        wheels.append(wheel)

    return wheels

def create_lights():
    """Create headlights and taillights"""
    # Headlights
    for y in [WIDTH * 0.15, -WIDTH * 0.15]:
        bpy.ops.mesh.primitive_uv_sphere_add(
            radius=0.1,
            location=(LENGTH * 0.45, y, HEIGHT * 0.25)
        )
        headlight = bpy.context.active_object
        headlight.name = "Headlight_R" if y > 0 else "Headlight_L"
        headlight.data.materials.append(mat_chrome)

    # Taillights
    for y in [WIDTH * 0.15, -WIDTH * 0.15]:
        bpy.ops.mesh.primitive_cube_add(
            size=0.1,
            location=(-LENGTH * 0.45, y, HEIGHT * 0.25)
        )
        taillight = bpy.context.active_object
        taillight.name = "Taillight_R" if y > 0 else "Taillight_L"
        taillight.scale = (0.05, 0.15, 0.1)
        # Red material
        mat_tail = create_material("TaillightRed", (0.8, 0.0, 0.0), metallic=0.5, roughness=0.3)
        taillight.data.materials.append(mat_tail)

def create_grille():
    """Create front grille"""
    bpy.ops.mesh.primitive_cube_add(
        size=1,
        location=(LENGTH * 0.45, 0, HEIGHT * 0.18)
    )
    grille = bpy.context.active_object
    grille.name = "Grille"
    grille.scale = (0.05, WIDTH * 0.3, HEIGHT * 0.12)
    grille.data.materials.append(mat_black)

def create_windshield():
    """Create windshield and windows"""
    # Windshield
    bpy.ops.mesh.primitive_cube_add(
        size=1,
        location=(LENGTH * 0.18, 0, HEIGHT * 0.5)
    )
    windshield = bpy.context.active_object
    windshield.name = "Windshield"
    windshield.scale = (0.05, WIDTH * 0.35, HEIGHT * 0.22)
    windshield.rotation_euler = (0, math.radians(30), 0)
    windshield.data.materials.append(mat_glass)

    # Rear window
    bpy.ops.mesh.primitive_cube_add(
        size=1,
        location=(-LENGTH * 0.12, 0, HEIGHT * 0.5)
    )
    rear_window = bpy.context.active_object
    rear_window.name = "RearWindow"
    rear_window.scale = (0.05, WIDTH * 0.35, HEIGHT * 0.2)
    rear_window.rotation_euler = (0, math.radians(-25), 0)
    rear_window.data.materials.append(mat_glass)

def setup_pivot_points():
    """Set up proper pivot points for animated parts"""
    # Door pivot points (hinge at front of door)
    for door in bpy.data.objects:
        if "Door" in door.name:
            # Move origin to hinge
            bpy.context.view_layer.objects.active = door
            # This would need mesh editing for proper pivot

def main():
    """Build the complete car"""
    print("Building GR86...")

    # Create all parts
    create_car_body()
    create_door("Door_FL", LENGTH * 0.12, WIDTH * 0.2)
    create_door("Door_FR", LENGTH * 0.12, -WIDTH * 0.2)
    create_door("Door_RL", -LENGTH * 0.12, WIDTH * 0.2)
    create_door("Door_RR", -LENGTH * 0.12, -WIDTH * 0.2)
    create_hood()
    create_trunk()
    create_wheels()
    create_lights()
    create_grille()
    create_windshield()

    # Set up scene for export
    bpy.context.scene.render.engine = 'CYCLES'

    # Add basic lighting
    bpy.ops.object.light_add(type='SUN', location=(5, 5, 10))
    sun = bpy.context.active_object
    sun.data.energy = 3

    bpy.ops.object.light_add(type='AREA', location=(0, 0, 5))
    area = bpy.context.active_object
    area.data.energy = 100

    # Set camera
    bpy.ops.object.camera_add(location=(8, -8, 4))
    camera = bpy.context.active_object
    camera.rotation_euler = (math.radians(70), 0, math.radians(45))
    bpy.context.scene.camera = camera

    print("GR86 model complete!")
    print("Objects created:")
    for obj in bpy.data.objects:
        print(f"  - {obj.name}")

if __name__ == "__main__":
    main()
