export class MovieDataModel{

    constructor(
        public id:Number,
        public title:string,
        public overview:string,
        public release_data:string,
        public popularity:Number,
        public vote_count:Number,
        public poster_path:string
        ){

    }
    
}