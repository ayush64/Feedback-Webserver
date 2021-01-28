if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}

// 8YkO6LFHlibKJTqy

// mongodb+srv://myuser:8YkO6LFHlibKJTqy@cluster0.rdk2d.mongodb.net/prodUsers?retryWrites=true&w=majority
