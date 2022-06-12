# Set subdirectory as website root on Github Pages

## [Method 1](https://stackoverflow.com/a/36782614/13961420)

There is a detailed gist with all the required steps.

The gist is here:
[https://gist.github.com/cobyism/4730490](https://gist.github.com/cobyism/4730490)

---

### From the gist

> **Deploying a subfolder to GitHub Pages**
>
> Sometimes you want to have a subdirectory on the `master` branch be the root directory of a repository's `gh-pages` branch. This is useful for things like sites developed with [Yeoman](http://yeoman.io/), or if you have a Jekyll site contained in the `master` branch alongside the rest of your code.
>
> For the sake of this example, let's pretend the subfolder containing your site is named `dist`.
>
> **Step 1**
>
> Remove the `dist` directory from the project's `.gitignore` file (it's ignored by default by Yeoman).
>
> **Step 2**
>
> Make sure git knows about your subtree (the subfolder with your site).
>
> ```none
> git add dist && git commit -m "Initial dist subtree commit"
> ```
>
> **Step 3**
>
> Use subtree push to send it to the `gh-pages` branch on GitHub.
>
> ```none
> git subtree push --prefix dist origin gh-pages
> ```
>
> Boom. If your folder isn't called `dist`, then you'll need to change that in each of the commands above.

---

> If you do this on a regular basis, you could also [create a script](https://github.com/cobyism/dotfiles/blob/master/bin/git-gh-deploy) containing the following somewhere in your path:

```none
#!/bin/sh
if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi
git subtree push --prefix $1 origin gh-pages
```

> Which lets you type commands like:
>
> ```none
> git gh-deploy path/to/your/site
> ```

## Method 2

```bash
git add . && git commit -m "Adding the _advance_ row" && git push -u origin main

npm run build && cd dist && git add . && git commit -m "Updating build" && git push -u origin gh-pages -f

cd ..
```
