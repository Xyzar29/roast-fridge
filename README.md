# Roast the Smart Fridge

[![make.fun](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9.svg)](https://make.fun/competitions/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![Rank](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/xyzar29/roast-fridge/rank.svg)](https://make.fun/competitions/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![Reward](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/xyzar29/roast-fridge/reward.svg)](https://make.fun/competitions/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)

Entry for the [make.fun](https://make.fun) competition **Roast the Smart Fridge: One Line, Best Laugh Wins** (`u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9`).

## The line

> My smart fridge photographs me every time I open it, so somewhere in the cloud there's a flipbook of me getting fatter at 2 a.m.

One line, 128 characters. The fridge's door camera is a real behaviour; the sting is the cloud flipbook of midnight snacking.

## How it works

`main.ts` (Node 22) writes exactly that line to `$MAKEFUN_OUTPUT_DIR/entry.txt`, after checking it against the gate: UTF-8, a single line, 1–160 characters, not only whitespace. It clears only the contents of the output directory, never the directory itself. The output file is written with mode 0644.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
