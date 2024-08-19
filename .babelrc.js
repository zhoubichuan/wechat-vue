module.exports = {
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "presets": [
    ["@babel/preset-env", {
      "modules": false
    }]
  ],
  "plugins": ["transform-object-rest-spread"]
}