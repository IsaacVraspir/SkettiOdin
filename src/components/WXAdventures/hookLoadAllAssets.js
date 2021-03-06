import hookNonMovingBackgroundMap from "./hookNonMovingBackgroundMap";

//background
import grassBackgroundTile from "components/WXAdventures/Dungeon_Crawler/tiles/floor/floor_1.png";

export default (
  loader,
  nonMovingBackgroundGround,
  updateRenderer
) => {
  console.log("how many times")

  loader.add('grassBackgroundTile', grassBackgroundTile) 
  loader.load((loader, resources) => {
    hookNonMovingBackgroundMap(
      loader,
      nonMovingBackgroundGround,
      updateRenderer
    )
  });

  return {
    variables: {
      
    },
    functions: {
    }
  }
}