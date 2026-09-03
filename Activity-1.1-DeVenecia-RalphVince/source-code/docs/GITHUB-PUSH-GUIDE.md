# Step-by-Step Guide: How to Push Your Project to GitHub
## Pangasinan Heritage Digital Showcase
**Author:** Ralph Vince De Venecia (BSIT)  

---

## 📌 Prerequisites & Overview

To push this project to GitHub, you need:
1. A **GitHub account** ([github.com](https://github.com)).
2. **Git installed** on your computer (or use VS Code / GitHub Desktop).

We have already configured [`.gitignore`](file:///c:/Users/RALPHVINCE/Documents/Pangasinan/.gitignore) so that heavy temporary files like `node_modules` and `.next/` are automatically excluded from your GitHub repository.

---

## 🚀 Option 1: Terminal / Command Prompt (Standard Method)

### Step 1: Install Git (If not yet installed)
Open **PowerShell** or **Command Prompt** as Administrator and run:
```powershell
winget install --id Git.Git -e --source winget
```
*(After installation finishes, close and reopen your terminal/VS Code so `git` is recognized).*

---

### Step 2: Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Set the **Repository name**: `pangasinan-heritage-showcase` (or your preferred name).
3. Set the visibility to **Public** (or **Private**).
4. **IMPORTANT**: Leave "Add a README file", "Add .gitignore", and "Choose a license" **UNCHECKED** (we already have our own).
5. Click **Create repository**.
6. Copy the repository URL (e.g., `https://github.com/YOUR_USERNAME/pangasinan-heritage-showcase.git`).

---

### Step 3: Run Git Commands in Terminal
Open your terminal in `C:\Users\RALPHVINCE\Documents\Pangasinan` and run the following commands one by one:

```bash
# 1. Initialize Git in your project folder
git init

# 2. Add all project files to staging (node_modules is automatically ignored)
git add .

# 3. Commit your files with a descriptive message
git commit -m "feat: Initial commit for Activity 1 Pangasinan Heritage Digital Showcase"

# 4. Rename default branch to main
git branch -M main

# 5. Link your local project to your GitHub repository
# (Replace YOUR_USERNAME and REPO_NAME with your actual GitHub info)
git remote add origin https://github.com/YOUR_USERNAME/pangasinan-heritage-showcase.git

# 6. Push your code to GitHub
git push -u origin main
```

*(If prompted, log in with your GitHub credentials or Personal Access Token in the browser popup).*

---

## 🎨 Option 2: Visual Studio Code (Easiest & Fastest)

If you are using **VS Code**:

1. Open your project folder in VS Code (`File > Open Folder... > C:\Users\RALPHVINCE\Documents\Pangasinan`).
2. Click the **Source Control** icon on the left sidebar (or press `Ctrl + Shift + G`).
3. Click the blue **"Publish to GitHub"** button (or **"Initialize Repository"**).
4. Choose **"Publish to GitHub public repository"** or **"private repository"**.
5. Select all files and click **OK**.
6. VS Code will automatically commit and push all files to your GitHub account!

---

## 🖥️ Option 3: GitHub Desktop (User-Friendly GUI)

1. Download and install **GitHub Desktop** from [desktop.github.com](https://desktop.github.com).
2. Sign in to your GitHub account.
3. Click **File > Add Local Repository...** (`Ctrl + O`).
4. Browse and select `C:\Users\RALPHVINCE\Documents\Pangasinan`.
5. If prompted with *"This directory does not appear to be a Git repository"*, click **create a repository**.
6. Click **Publish repository** in the top bar.
7. Uncheck "Keep this code private" if you want it visible to your instructor, then click **Publish Repository**.

---

## ✅ Verifying Your Upload

Once pushed:
1. Visit `https://github.com/YOUR_USERNAME/pangasinan-heritage-showcase`.
2. Verify that:
   - Your `README.md` is rendered beautifully on the repository homepage.
   - The `components/`, `app/`, `data/`, and `docs/` folders are visible.
   - `node_modules` is **NOT** present (confirming clean repository practices).

