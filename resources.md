---
layout: page
title: "Resources for Economists"
---
In this page I list some resources I collected over time that I think are useful for Economists, in particular if you work either in Macroeconomics or more technical Finance questions. This page reflects 100% my own personal biases.

Use/read/cite at your own discretion.

-------------------

# AI-Related Stuff
AI is here to stay (and might take our jobs). This is a series of links and resources that help me, and might help you, navigate these challenging and exciting times. May the force be with us.

* [**Intro to Claude Code for Academics**](https://github.com/aspi6246/Claude-Code-Presentation/blob/main/Presentations/main.pdf): Personally, I use Codex a bit more. But many of the concepts here translate back and forth.
* [**Claude Code Workflow by Pedro Sant'Anna**](https://psantanna.com/claude-code-my-workflow/workflow-guide.html): details on how Pedro uses Claude Code for research and teaching. Very good if you're new to ```skills``` and agents in general.
* [**VS Code Live: Agent Sessions**](https://www.youtube.com/playlist?list=PLj6YeMhvp2S4gpM0lGDd5hIDveC7IsLwv): This is a great series of videos from the Microsoft team behind VS Code, teaching how to customize agents and optimize agentic coding in general, all within VS Code. I am a BIG fan of VS Code and GitHub Copilot, in general.
* [**Awesome Copilot**](https://github.com/github/awesome-copilot): check out some custom prompts and custom agents created by the GitHub Copilot community. This is really good if you want to customize how you use Copilot.

-------------------

# Life in the Fast (Terminal) Lane
If you spend enough time on a computer, the terminal stops being scary and starts feeling like home. Back at Northwestern, [Bob McDonald](https://www.kellogg.northwestern.edu/academics-research/faculty/mcdonald_robert/) once told me something like *"I live in the Terminal!"*. That sounded cool and savvy, so I try to be as efficient using it as Bob was. There are a few tools that make the ride much smoother.

* [**tmux**](https://github.com/tmux/tmux): lets you keep multiple terminal sessions, windows, and panes alive. Very useful when you have a lot going on and do not want one accidental closed window to ruin your day. Also great to log off and log back in without losing your work. I use this all the time between office and home computers since I do most of my work on a remote server.
* [**Starship**](https://starship.rs/): a fast, customizable prompt that tells you what is going on before you type the wrong command in the wrong folder. Also, great support for ```conda``` environments if that's your jam.
* [**Oh My Zsh**](https://ohmyz.sh/): a friendly way to make Zsh more useful, with sensible themes, plugins, and autocomplete. The terminal can have nice things too. I honestly like the colors.
* [**Homebrew**](https://brew.sh/): the package manager you will probably want five minutes after setting up a Mac. It installs a remarkable amount of useful software with very little drama. Prefer the Homebrew version of almost everything.
* [**Ghostty**](https://ghostty.org/): a fast and polished terminal emulator. It looks great, stays out of the way, and gives all the other tools above a nice place to live. Very fast, and it's actually a native app on Mac. Linux and Windows are also supported (I think). This is a passion project run by a millionaire -- expect great stuff.
* [**Glow**](https://github.com/charmbracelet/glow): a terminal-based Markdown reader. I use this to read documentation, tutorials, and even my own notes. It is fast and has a nice interface. I use it all the time because nowadays Markdown is the language of AI.

-------------------

# Coding Like The Old Days
I like writing code and I do it better every day (maybe less true since agents took over...).  We (empirical) economists use several tools and techniques that vary widely across areas, but some general principles apply and should be followed, IMHO.

* [**Classes by Jesus Fernandez-Villaverde**](https://www.sas.upenn.edu/~jesusfv/teaching.html): special focus on the *Computational Methods for Economists* course. I don't care if you don't do Macro -- this is useful for anyone looking for the best coding practices.
* [**The Missing Semester of Your Compute Science Education**](https://missing.csail.mit.edu/): this is a series of online lectures taught by MIT graduate students. They cover the basics of terminals, version control, text editors, etc. Again, it does not really matter what language you use or your field of study -- this is useful for everyone. From time to time I revisit this page.
* [**Combining DropBox or GitHub**](https://github.com/kbjarkefur/GitHubDropBox): I hope you are already convinced you should be using some version control system like Git, and collaborating with others using GitHub. Sometimes, there is also the need to use DropBox (or Google Drive, Box, etc.) to share large files, such as data. This connection might be tricky, and this tutorial teaches you exactly what you should be doing.
* [**Data Science for Economists**](https://github.com/uo-ec607): a class taught by Grant McDermott at the University of Oregon. This is a great class that teaches you how to use basic tools like your terminal and Git. Grant teaches it with an R-centric flavor, but a lot of this material is language-agnostic. I recommend it to everyone.
* [**Python and R Guides by Sean Higgins**](https://github.com/skhiggins): Sean is a professor at Kellogg and he is super knowledgeable about empirical methods AND managing large projects with many collaborators. He has a series of guides on how to use Python, R, and even Stata for empirical work. I recommend you check his GitHub page and follow the guides.
* [**Code and Data, by Matthew Gentzkow and Jesse Shapiro**](https://shapiro.scholars.harvard.edu/sites/g/files/omnuum7731/files/shapiro/files/codeanddata.pdf): this is much older than what Sean wrote, for example, but some of the lessons here are timeless. [Brandon Zborowski](https://www.brandonzborowski.com/) told me that reading this is mandatory when one joins large RA programs such as the one at the New York Fed. He also told me that it is recommended reading when people join data-driven firms in the Econ consulting world.
* [**The Good Research Code Handbook, by Patrick Mineault**](https://goodresearch.dev/): very cool resource covering how to organize an empirical project, how to write documentation, how to think about modules as well. This is a bit more Python-centric and not necessarily tailored to Economics, but super cool regardless. I thank [Nate Lawrence](https://www.nathaniellawrence.com/) for pointing me to this!

-------------------
# Data Resources
Sometimes finding data is hard. These are niche-y data resources that I found over time. Remember to correctly cite the providers if you use their data.

* [**Open Source Asset Pricing**](https://www.openassetpricing.com/): a huge data warehouse with 300+ monthly series of several "anomaly" factors. There is a companion [paper](https://www.nowpublishers.com/article/Details/CFR-0112) explaining the data.
* [**Saketh Aleti's High Frequency Data**](https://www.sakethaleti.com/data): this is a free dataset with 1-minute returns for a bunch of Asset Pricing factors. Saketh gave us a great starting point for high-frequency research that relies on risk factors. And he is a great guy as well. I don't think it's being updated regularly anymore.
* [**NEFIN @ USP**](https://nefin.com.br/): these guys are a Finance research center at the University of São Paulo. They compute several interesting indicators for the Brazilian Market. In particular, they compute the Fama-French 5 factors for Brazil.

-------------------
# Statistical Methods in Finance and Economics
Some material that might be helpful if you are generally curious about the intersection of Machine Learning and Economics/Finance.

* [**A Similar Page by Dario Sansone**](https://sites.google.com/view/dariosansone/resources/machine-learning): Dario is at the University of Exeter. He has curated over the years a very detailed page with many papers, online classes, and other resources about Machine Learning. He seems more interested in the usage in Economics and not so much in Finance. Super detailed and recommended, nonetheless.
* [**Financial Machine Learning**](https://www.nber.org/system/files/working_papers/w31502/w31502.pdf): this is a great review by Bryan Kelly and Dacheng Xiu on why/how to use Machine Learning in Finance. But notice that most of their discussion is for *prediction* purposes. See the page from Fernandez-Villaverde for a different perspective -- machine learning to solve models.
* [**Deep Learning for Economists**](https://www.aeaweb.org/articles?id=10.1257/jel.20241733): a great introduction by Melissa Dell. If you do not know where to start and you want to learn more about Deep Learning, this is a great place. Melissa teaches really well and you can see her teaching some of this material at [EconDL](https://econdl.github.io/).
