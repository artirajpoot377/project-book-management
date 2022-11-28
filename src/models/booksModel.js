const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    userId: {
      type:objectId,
      required: true,
      ref: "user",  
    },
    ISBN: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },
    reviews: {
      type: Number,
      default: 0,
      comment: "hold number of reviews of this book", //??
    },
    deletedAt:{                                   //??
      Date: Date,          //(when the item deleted)
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    releasedAt: {
      Date: Date,             //format("YYYY-MM-DD")
      //required: true,       //??
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("book", bookSchema);

