#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

const coverageDirPath = process.argv[2]

const cssPath = path.join(coverageDirPath, "base.css")
const cssContent = `html {
  filter: invert(1) hue-rotate(300deg);
}\n`
fs.readFile(cssPath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err)
        return
    }
    const modifiedContent = cssContent + data
    fs.writeFile(cssPath, modifiedContent, "utf8", (err) => {
        if (err) {
            console.error("Error writing to css file:", err)
            return
        }
    })
})

const faviconPath = path.join(__dirname, "favicon.png")
const destinationPath = path.join(coverageDirPath, "favicon.png")
fs.copyFile(faviconPath, destinationPath, (err) => {
    if (err) {
        console.error("Error copying favicon file:", err)
    }
})
