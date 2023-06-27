const { User, Product, Order, Cart, Category, Review } = require("../models");

const resolvers = {
  Query: {
    // find all users
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error("Failed to fetch users.");
      }
    },

    // find a user by id
    user: async (parent, { userId }) => {
      try {
        const user = await User.findById(userId).populate("orders");
        if (!user) {
          throw new Error("User not found.");
        }
        return user;
      } catch (error) {
        throw new Error("Failed to fetch user by ID.");
      }
    },

    // find all products
    products: async () => {
      try {
        const products = await Product.find();
        return products;
      } catch (error) {
        throw new Error("Failed to fetch products.");
      }
    },

    // find a product by id
    product: async (parent, { productId }) => {
      try {
        const product = await Product.findById(productId);
        if (!product) {
          throw new Error("Product not found.");
        }
        return product;
      } catch (error) {
        throw new Error("Failed to fetch product by ID.");
      }
    },

    // Retrieve all products by category
    productsByCategory: async (parent, { categoryId }) => {
      try {
        const products = await Product.find({ category: categoryId });
        return products;
      } catch (error) {
        throw new Error("Failed to fetch products by category.");
      }
    },

    // Find all orders
    orders: async () => {
      try {
        const orders = await Order.find();
        return orders;
      } catch (error) {
        throw new Error("Failed to fetch orders.");
      }
    },

    // Find an order by ID
    order: async (parent, { orderId }) => {
      try {
        const order = await Order.findById(orderId);
        if (!order) {
          throw new Error("Order not found.");
        }
        return order;
      } catch (error) {
        throw new Error("Failed to fetch order by ID.");
      }
    },

    // Find orders by user
    ordersByUser: async (parent, { userId }) => {
      try {
        const orders = await Order.find({ user: userId });
        return orders;
      } catch (error) {
        throw new Error("Failed to fetch orders by user.");
      }
    },

    // Find a cart by ID
    cart: async (parent, { cartId }) => {
      try {
        const cart = await Cart.findById(cartId);
        if (!cart) {
          throw new Error("Cart not found.");
        }
        return cart;
      } catch (error) {
        throw new Error("Failed to fetch cart by ID.");
      }
    },

    // Find carts by user
    cartsByUser: async (parent, { userId }) => {
      try {
        const carts = await Cart.find({ user: userId });
        return carts;
      } catch (error) {
        throw new Error("Failed to fetch carts by user.");
      }
    },

    // Find all categories
    categories: async () => {
      try {
        const categories = await Category.find();
        return categories;
      } catch (error) {
        throw new Error("Failed to fetch categories.");
      }
    },

    // Find a category by ID
    category: async (parent, { categoryId }) => {
      try {
        const category = await Category.findById(categoryId);
        if (!category) {
          throw new Error("Category not found.");
        }
        return category;
      } catch (error) {
        throw new Error("Failed to fetch category by ID.");
      }
    },

    // Find a category by product
    categoryByProduct: async (parent, { productId }) => {
      try {
        const category = await Category.findOne({ product: productId });
        if (!category) {
          throw new Error("Category not found for the product.");
        }
        return category;
      } catch (error) {
        throw new Error("Failed to fetch category by product.");
      }
    },

    // Find all reviews
    reviews: async () => {
      try {
        const reviews = await Review.find();
        return reviews;
      } catch (error) {
        throw new Error("Failed to fetch reviews.");
      }
    },

    // Find reviews by product
    reviewsByProduct: async (parent, { productId }) => {
      try {
        const reviews = await Review.find({ product: productId });
        return reviews;
      } catch (error) {
        throw new Error("Failed to fetch reviews by product.");
      }
    },

    // Find reviews by star rating
    reviewsByStarRating: async (parent, { starRating }) => {
      try {
        const reviews = await Review.find({ star_rating: starRating });
        return reviews;
      } catch (error) {
        throw new Error("Failed to fetch reviews by star rating.");
      }
    },
  },

  Mutation: {},
};

module.exports = resolvers;
