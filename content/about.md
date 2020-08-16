# Workflow

Created to **simplify** navigation and **reduce** the need to **manipulate** windows in order to **improve productivity**. It's meant to be 100% **predictable** and bring the benefits of tools coveted by professionals to everyone. 

## Spatial Model

This is the **core** of the **workflow** and what everything is built around and in our case it's one of the simplest: **a Grid**

<p align="center" valign="middle">
 <img align="center" valign="middle" src="./documentation/spatialisation.gif"
            alt="Spatialisation illustrated">
</p>

A **Workspace** is an applications container that can be **visualized as a row** and **applications as cells**.

Every **new application** is **automatically positioned** inside this grid at the end of its workspace row and every **new workspaces** are **appended at the bottom** which is very **predictable** and **always sorted automatically**.

This allow us to provide **intuitive navigation** by moving the screen around a larger context. Navigating **up** and **down** will change the current workspace and navigating **left** and **right** change the current window(s) on screen.

You can organize your applications by use cases as **activities** or by applications type as **categories**.

## Interface

Designed to represent the **state** of the **workflow** and provide **navigation** capabilities for both a **mouse** and a **touchscreen**.

### Layout

The interface is divided in **two parts**:

In the **left panel** everything pertains to the **system**: workspaces state, current system status, notifications, etc.

On the **right** of the left panel everything pertains to the **active workspace**: the windows on the workspace's row, the layout switcher, and the windows themselves.

<p align="center" valign="middle">
 <img align="center" valign="middle" src="./documentation/interface_showcase.gif"
            alt="Interface layout illustrated">
</p>

The two most important components are the **system panel** (on the left) and the **workspace panel** (on the top).

#### System panel
The system panel is the main component of the left side of the interface. It consists of:
* **Workspace list and switcher**: This component lists all the workspaces available and the currently selected one. It allows us to navigate to a specific workspace by clicking on its icon.
* **System tray**: This component lists all the information about the system, e.g. network status, bluetooth connectivity, volume, battery, and notification icons.

#### Workspace panel
The workspace panel is the main component of the right side of the interface. It consists of:
* **App switcher**: This component lists all the application windows opened in the current workspace's row and the currently focused one. It allows us to navigate to a specific window within the row by selecting its item.
* **Layout switcher**: This component displays the current layout of the workspace and can be clicked to switch to the next available layout.

### Design
Made by following the **[Material Design guidelines](https://material.io)** - a solid baseline that allows us to provide an **aesthetically pleasing** and **highly accessible** interface. 

### Themes
You can choose between 3 different themes:
* Dark
* Light
* Primary (Colorful one)

And there is also a **blurry** version available for the more fancy ones !

## Tiling engine
It's the **tool** that **automatically organize** the application's **window** for you in a **predictable** and mutually **non-overlapping** disposition.

<p align="center" valign="middle">
 <img align="center" valign="middle" src="./documentation/tiling_showcase.gif"
            alt="Tiling engine illustrated">
</p>

**Choose** at **any time** which tiling layout suit the most for your need:
* **Maximize**: Single window at a time
* **Split**: 2 windows side by side 
* **Column**: All windows displayed as columns (useful for ultra wide monitor)
* **Half**: One master window on the left then others windows stacked to the right
* **Grid**: All windows displayed as a grid

## Persistence
The **best way** to **configure** the desktop layout it's to **not** having to **do it**.

Material Shell **keep track** of every **decisions** relative to the desktop layout: where are windows, in which workspaces in which order.

This allow to **configure** the layouts **on the go** while using it.

When opening a **new session** Material Shell will **restore every windows** previously present with a "**window placeholder** which allow you to reopen any of the previous window easily at the same spot you like to have them.

## Hotkeys
Some hotkeys might already be used by GNOME Shell - please check your keybindings first.
#### Desktop navigation
* `Super+W` Navigate to the upper workspace/category.
* `Super+S` Navigate to the lower workspace/category.
* `Super+A` Focus the window at the left of the current window.
* `Super+D` Focus the window at the right of the current window.
* `Super+1`, `Super+2` ... `Super+0` Navigate to specific workspace

#### Window manipulation
* `Super+Q` Kill the current window focused.
* `Super+[MouseDrag]` Move window around.
* `Super+Shift+A` Move the current window to the left.
* `Super+Shift+D` Move the current window to the right.
* `Super+Shift+W` Move the current window to the upper workspace.
* `Super+Shift+S` Move the current window to the lower workspace.

#### Extra Hotkeys
* `Super+Space` Cycle the tiling layout of the current workspace.
* `Super+Escape` Toggle the UI of Material-shell, like a Zen mode.