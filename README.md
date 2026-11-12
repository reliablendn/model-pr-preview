# model-pr-preview

An architecture model as the single source of truth, changed only through pull requests, with a live preview of every proposed change.

This repo is a small, fictional example: a gym chain building its own member experience (**Studio**) on top of a vendor's headless class-booking platform. Fork it, replace the model with your own, and every pull request gets a preview link you can compare against `main`.

## What's in it

| Path | What it is |
|---|---|
| `model.likec4` | The model: every system, service and relationship, defined once. Tags place services in layers. Two views are generated from the same definitions: the landscape, and Studio grouped by layer. Click Studio in the landscape to open its view. |
| `journeys/book-class/index.likec4` | A customer journey as a LikeC4 dynamic view. Each step that crosses into the vendor's platform has a note listing the data it needs. Together, they're the requirements for the platform's API contract. |
| `.github/workflows/deploy.yml` | Builds the model into a static LikeC4 site on every push, publishes it to GitHub Pages, and comments on the pull request with preview links. |

## How the workflow works

On every push to any branch:

1. It builds the model with `likec4 build` into a static site.
2. It publishes the site to the `model-pages` branch, which GitHub Pages serves:
   - `main` is published at the root: `https://<owner>.github.io/<repo>/`
   - every other branch is published under its own path: `https://<owner>.github.io/<repo>/branches/<branch>/`
3. If the branch has an open pull request, it posts a comment with two links: **This branch** and **Main**. On later pushes it updates the same comment instead of adding new ones.

Reviewers open the two links side by side in a browser and see exactly how the proposed change affects each view and journey. They don't need to install anything or read the model's code.

## Set it up

1. **Create your repo** from this one (fork it, or copy the files into a new repo).
2. **Allow the workflow to write.** In *Settings → Actions → General → Workflow permissions*, choose *Read and write permissions*. The workflow pushes to the `model-pages` branch and comments on pull requests.
3. **Push to `main` once.** The first run creates the `model-pages` branch.
4. **Turn on GitHub Pages.** In *Settings → Pages*, choose *Deploy from a branch*, then `model-pages` and `/ (root)`.
5. **Open a pull request** that changes the model. Within a minute or two, the preview comment appears.

If you serve Pages from a custom domain, set a repository variable called `PAGES_BASE_URL` (in *Settings → Secrets and variables → Actions → Variables*) to that URL.

## Work on the model locally

```bash
npx likec4 start      # live preview at http://localhost:5173
npx likec4 validate   # check the model for errors
```

The [LikeC4 VS Code extension](https://marketplace.visualstudio.com/items?itemName=likec4.likec4-vscode) adds syntax highlighting, navigation and a preview panel.

## Make it yours

- Replace `model.likec4` with your own systems. Start with a **steel thread**: the first thin, end-to-end journey you'll deliver, the services it needs, and how they integrate with external systems. Use it to get agreement on the first iteration.
- Add a folder under `journeys/` for each customer journey, as a dynamic view. Put the data each cross-system step needs in its `notes`.
- From then on, make every change to the system start as a pull request against the model.

## Known limitations

- Previews for deleted branches stay on the `model-pages` branch until you remove them.
- Pull requests from forks can't comment, because their workflow token is read-only.
- The LikeC4 version is pinned in `deploy.yml`. Update it deliberately.
