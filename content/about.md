# Material Shell

A **modern desktop interface** for **Linux** - packaged as an extension for **[GNOME Shell](https://wiki.gnome.org/Projects/GnomeShell)**.

Improve your user experience and get rid of the anarchy of traditional desktop workflows. 

Designed to **simplify** navigation and **reduce** the need to **manipulate** windows in order to **improve productivity**. It's meant to be 100% **predictable** and bring the benefits of tools coveted by professionals to everyone. 

<!-- * **[Spatial Model]()** a **natural** and **predicable organization** where all windows are organized in a **grid**.
* **[Interface]()** is designed to give an at-a-glance view of spatial model state and allow you to navigate with a mouse or on a touchscreen.
* **[Tiling engine]()** **automatically arrange** the application's **window** in a **predictable** and mutually **non-overlapping** disposition.
* **[Persistence]()** help you **retrieve** your **favorite layout** and **window's organization** even after a reboot. -->
Get notified about updates and join us at ‎‎<a href="https://discord.gg/vBb7D9a">
        <img valign="middle" src="https://img.shields.io/discord/584783412959641716?logo=discord&style=for-the-badge"
            alt="chat on Discord">
</a>

**Discover what makes Material Shell Awesome**

<headline-list>
  
<headline-list-item icon="mdi-compass" to="#spatial-model" title="Spatial Model">
  A natural and predictable organization where all windows are organized in a grid.
</headline-list-item>

<headline-list-item icon="mdi-monitor-dashboard" to="#interface" title="Interface">
  Designed to give an at-a-glance view of spatial model state and allow you to navigate with a mouse or on a touchscreen.
</headline-list-item>

<headline-list-item icon="mdi-collage" to="#tiling-engine" title="Tiling engine">
  Automatically arrange the application's window in a predictable and mutually non-overlapping disposition.
</headline-list-item>

<headline-list-item icon="mdi-content-save" to="#persistence" title="Persistence">
  Help you retrieve your favorite layout and window's organization even after a reboot.
</headline-list-item>

<headline-list-item icon="mdi-keyboard" to="#hotkeys" title="Hotkeys">
  Smart hotkeys optimized for using you keyboard and mouse at the same time. 
</headline-list-item>

</headline-list>



---

# Spatial Model

As humans we are able to navigate much easier in a known space so we made it predictable.

![Spatial model showcase](/spatialisation.gif)

A **workspace** is an area that you can **contain** multiple **apps** at once and switch between them easily.

In Material Shell, every **workspace** can be **visualized** as a **row** with several apps.

When you **open** a new **app**, it is **automatically placed** at the **end** of the current **workspace**.

When you add a **new workspace**, it is **automatically added underneath**.

There's never any doubt as to where it has gone, and to where to find it again.

It is **simple**, **predictable** and does the work of sorting windows for you.

The spatial model of a grid also allows you to **intuitively** and easily **navigate** across your apps. 

With **keyboard shortcuts** you can **go up and down** between **workspaces** and **left and right** in between **windows**. 

This makes it a cinch to switch, no matter how your apps are arranged.

---

# Interface

The Material Shell interface is designed to give an at-a-glance view of where everything is as well as allow you to navigate with a mouse or on a touchscreen.

## The Layout

The Material Shell layout is divided into two parts.

**In the left panel everything pertains to the system:** which workspace is open, current system status, notifications, etc.

**On the right of the left panel everything pertains to the workspace you are using:** the windows on the workspace's row, the layout switcher, and the windows themselves.

![Interface showcase](/interface_showcase.gif)

The two most important components are the system panel (on the left) and the workspace panel (on the top).

#### System panel
The bar to the left of the workspace pertaining to the system itself. 

It contains:

* **Workspace list and switcher:** Lists all the workspaces available and highlights the one that is active. You can navigate to a specific workspace by clicking on its icon.
* **System tray:** Lists information about the system, e.g. network status, bluetooth connectivity, volume, battery, and notification icons.

#### Workspace panel
The workspace panel is the main component of the right side of the interface. It consists of:

* **App switcher:** Lists all the windows in the current workspace and highlights the currently focused one. You can switch to a specific window by clicking its title in the list.
* **Layout switcher:** Shows the current tiling layout of the workspace, clicking it allows you to change it.

## Design

Made by following the **[Material Design guidelines](https://material.io)** - a solid baseline that allows us to provide an **aesthetically pleasing** and **highly accessible** interface.

#### Themes
There are three themes available for Material Shell.

* Dark
* Light
* Primary (using a colour of your choice)

[A picture would be good here]

It is also possible to blur the interface, for those of you who would like a polished glassy look.

[another picture]

---

# Tiling engine
In Material Shell windows are tiled. These means they are organised in a predictable way in which they do not overlap. It takes the mess out of window management.

These are some of the different ways that Material Shell allows windows to be tiled.


![Tiling showcase](/tiling_showcase.gif)


At any time, it is possible to switch between these layouts:

* **Maximize**: Single window taking up the whole workspace
* **Split**: Two windows side-by-side taking up half the workspace each 
* **Column**: All windows displayed as columns (useful for ultra wide monitor)
* **Half**: One window on the left then others windows stacked to the right
* **Grid**: All windows displayed as a grid

---

# Persistence

The best way to organise your windows and workspaces, is to not to.

*Have you ever noticed that every time you open up your desktop, it is the same routine? Open up your apps, arrange them in the right place?*

Material Shell keeps track of the workspaces you open and the windows you open in them. Simply use your machine as you see fit, and it will remember where you put everything.

You personalize your working environment, just by using your machine.

Whenever you log in to your machine, Material Shell will have a special placeholder for every window you had open. Simply click on it to reopen the app in the same place it was before.

[picture should go here]

Without any effort, all your windows fall into place, right where you want them.

---

# Hotkeys
Some hotkeys might already be used by GNOME Shell - please check your keybindings first.
#### Desktop navigation
* `Super+W` Navigate to the upper workspace.
* `Super+S` Navigate to the lower workspace.
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