# pnpm Project Setup Guide

This README provides a comprehensive guide for setting up and using `pnpm` as the package manager for your project. This includes installation, initialization, dependency management, and additional configurations.

## Table of Contents.
- [Prerequisites](#prerequisites)
- [Step 1: Clean Installation of pnpm](#step-1-clean-installation-of-pnpm)
- [Step 2: Project Setup with pnpm](#step-2-project-setup-with-pnpm)
- [Additional pnpm Configurations](#additional-pnpm-configurations)
- [Verifying Installation](#verifying-installation)
- [Common Commands](#common-commands)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before starting, ensure that you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system, as `pnpm` requires Node.js to run. To verify your versions, use the following commands:

```bash
node -v
npm -v
```

## Step 1: Clean Installation of pnpm

To install `pnpm` fresh, begin by removing any existing installation and then install it globally:

```bash
# Remove existing pnpm (if previously installed)
npm uninstall -g pnpm

# Install pnpm globally
npm install -g pnpm
```

### Verify pnpm Installation

Once installed, confirm that `pnpm` is installed by checking its version:

```bash
pnpm -v
```

## Step 2: Project Setup with pnpm

To initialize and set up your project with `pnpm`, follow these steps:

1. **Navigate to your project directory**:
    ```bash
    cd your-project-directory
    ```

2. **Initialize a new pnpm project** (this will create a `package.json` file):
    ```bash
    pnpm init
    ```

3. **Install dependencies** listed in `package.json`:
    ```bash
    pnpm install
    ```

## Additional pnpm Configurations

To customize your `pnpm` setup, you may want to configure additional settings.

### Disable Funding Messages

To prevent `pnpm` from displaying funding messages during installations, use the following command:

```bash
pnpm config set fund false
```

## Verifying Installation

After setting up `pnpm`, you can run a basic installation command to ensure everything works smoothly. If dependencies are defined in your `package.json`, they should install correctly using:

```bash
pnpm install
```

## Common Commands

Below are some frequently used `pnpm` commands to help you manage your project:

- **Install a specific package**:
  ```bash
  pnpm add package-name
  ```

- **Install a package as a dev dependency**:
  ```bash
  pnpm add -D package-name
  ```

- **Remove a package**:
  ```bash
  pnpm remove package-name
  ```

- **Update all packages**:
  ```bash
  pnpm update
  ```

- **Run a script defined in `package.json`**:
  ```bash
  pnpm run script-name
  ```

- **Execute a command within the `pnpm` environment**:
  ```bash
  pnpm exec command
  ```

## Troubleshooting

If you encounter issues with `pnpm` installation or project setup, consider the following:

- Ensure `pnpm` is globally available by running `pnpm install -g pnpm`.
- Verify that the `node_modules` directory exists and contains the appropriate dependencies.
- For more details, consult the [official pnpm documentation](https://pnpm.io/).

---

With this guide, you should be able to set up and manage projects effectively using `pnpm`. If you run into any issues or have suggestions, please open an issue in this repository.

--- 
