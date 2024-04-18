import { Video } from "../../useCases/orderEvents/video";

export class VideoFactory {
    static create() {
        return new Video()
    }
}