const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
      if (bigShoeImg !== imgURL.bigShoe) {
        changeBigShoeImage(imgURL.bigShoe);
      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl ${
          bigShoeImg === imgURL.bigShoe
            ? "border-coral-red"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
  

        <div
          className="flex justify-center items-center bg-center bg-cover w-[10rem] h-[10rem] rounded-xl p-4 sm:w-40 sm:h-40"
          style={{ backgroundImage: "url('/thumbnail-background.svg')" }}
        >
          <img src={imgURL.thumbnail} alt="shoe collection" className="object-contain" />
        </div> 
      </div>
    );
  };
  
  export default ShoeCard;
  