import classes from "./WishlistTab.module.css";
import WishlistForm from "../Wishlist/WishlistForm";
import WishlistItems from "../Wishlist/WishlistItems";

const WishlistTab = () => {
  return (
    <div className={classes["wishlist-page"]}>
      <WishlistForm />
      <WishlistItems />
    </div>
  );
};

export default WishlistTab;
