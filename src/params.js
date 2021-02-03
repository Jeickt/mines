import { Dimensions } from 'react-native'

export default params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.1,
  difficultLevel: 0.15,
  getColumnsAmount() {
    const width = Dimensions.get('window').width
    return Math.floor(width / this.blockSize)
  },
  getRowsAmount() {
    const totalHeight = Dimensions.get('window').height
    const boardHeight = totalHeight * (1 - this.headerRatio)
    return Math.floor(boardHeight / this.blockSize)
  }
}