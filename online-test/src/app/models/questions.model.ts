export class QuestionsModel {
    constructor(
        public question:string,
        public options:Array<string>,
        public answer: string
    ){}
}
