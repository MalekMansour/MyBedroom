# MyBedroom

A client-side link manager that lets you organize, tag, filter, preview and secure your favorite websites in custom folders, all in a sleek dark-mode interface.

---

## Why MyBedroom?

Life online moves fast—tabs pile up, bookmarks get lost in the shuffle, and sensitive URLs end up in places you don’t really want them. **MyBedroom** solves this by giving you:

- **Absolute Control**  
  All your data lives locally in the browser’s `localStorage`. No servers, no sign-ups, no tracking.

- **Instant Organization**  
  Create custom folders (plus built-in “General” and two-step–protected “Hidden”), color-tag links, and filter in one click.

- **Built-in Privacy**  
  Your “Hidden” folder is protected by a primary password (and optional secondary). Other folders can have their own passwords too—perfect for shared machines.

- **Lightweight & Offline**  
  Pure HTML/CSS/JS. Works offline, boots instantly.

---

## Features

- **Folder Management**  
  - Create, rename, and delete your own folders  
  - “General” and “Hidden” built-in folders (cannot be deleted)  
  - Optional per-folder passwords (single or two-step for Hidden)

- **Link CRUD**  
  - Add, edit and permanently delete links  
  - Store URL, title & description  
  - Delete and move links between folders, with confirmation pop-ups

- **Color Tags & Filtering**  
  - 12 named colors to tag each link  
  - Filter by one color in the dropdown  

- **Secure Modals & UI**  
  - All confirmations & inputs use centered custom modals  
  - Dark, smooth, responsive UI with sidebar and context menus  

---

## Getting Started

1. **Download or clone** this repository.  
2. Open `index.html` in your browser (no build step required).  
3. Your data is automatically saved to `localStorage`—no further setup needed.

> To wrap as a standalone desktop app, drop the same files into any HTML-packaging workflow (Electron, Tauri, etc.) and point to `index.html`.

---

## Usage

1. **Folders**  
   - Use the **+ Add Folder** button in the sidebar to create a new category.  
   - Click the folder name to open it.  
   - For user-created folders, click **Folder Settings** to set or remove a password, or delete the folder.

2. **Adding Links**  
   - Fill out the **Website Name**, **URL**, and **Description**, then **Save Link**.  
   - Links appear in a list; click the ⋮ menu to move, re-color, share by email, or delete.

3. **Color Tags**  
   - Choose from a palette of 12 named colors when adding or editing a link.  
   - Use the **Filter by Color** dropdown to instantly show only links with that tag.

4. **Hidden Folder**  
   - First time you click **Hidden**, you’ll be prompted to create a primary password.  
   - Once set, entering **Hidden** requires password verification—optionally a secondary step if configured under **Manage Passwords**.

---

## License

This project is licensed under the ISC License.  
