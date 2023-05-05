import styled from 'styled-components'

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 25px auto;
  height: 100vh;
  background-color: ${({theme})=> theme.colors.details.primary.dark};
  padding: 20px;
`;

const ImageWrapper = styled.div`
  width: 30%;
  margin-bottom: 20px;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  button {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const DiaD = () => {
  const images = ['https://cdn.discordapp.com/attachments/1098057370728403115/1100910943002693732/20230426_192622.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908447865774201/IMG-20230426-WA0010.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908447622512670/IMG-20230426-WA0009.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908447391813652/IMG-20230426-WA0012.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908447114993724/IMG-20230426-WA0013.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101276495743307816/IMG-20230427-WA0282.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908446854955038/IMG-20230426-WA0011.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908446586507404/IMG-20230426-WA0014.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908446200635512/IMG-20230426-WA0015.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908445852516413/IMG-20230426-WA0016.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908296577232997/IMG-20230426-WA0026.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101283331397656637/IMG-20230427-WA0297.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908296187150386/IMG-20230426-WA0025.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908295876784168/IMG-20230426-WA0029.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908295574782013/IMG-20230426-WA0030.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908295281197177/IMG-20230426-WA0027.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908294970802248/IMG-20230426-WA0028.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101266972093726750/IMG-20230427-WA0269.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101267408330690620/IMG-20230427-WA0270.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101267941535776818/IMG-20230427-WA0272.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101267941812617299/IMG-20230427-WA0273.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101267942127173682/IMG-20230427-WA0274.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101268527538782299/IMG-20230427-WA0275.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101268527803015319/IMG-20230427-WA0276.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101268528079847444/IMG-20230427-WA0277.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101269274334593045/IMG-20230427-WA0278.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101269274594660532/IMG-20230427-WA0281.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101269274884059176/IMG-20230427-WA0280.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101269275118927942/IMG-20230427-WA0279.jpg' ];
  /*
    const handleAddImage = () => {
      const newImages = [      ...images,      'https://source.unsplash.com/random/300x20' + (images.length + 1),    ];
      setImages(newImages);
    };
  */

  return (
    <div>
        <GalleryWrapper>
          {images.map((image, index) => (
            <ImageWrapper key={index}>
              <img src={image} alt={`Image ${index}`} />
            </ImageWrapper>
          ))}
        </GalleryWrapper>
    </div>
  );
};

/**
     <ButtonWrapper>
        <button onClick={handleAddImage}>Add Image</button>
      </ButtonWrapper>
 * * */

export default DiaD;