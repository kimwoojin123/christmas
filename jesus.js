class ForExam{
  constructor() {
    this.initData();
  }

  initData(){

    const config = {
      baseArray:['피카츄', '라이츄', '꼬부기'],
      specialProblems: [10,16,17,18,19,20],
      htmlTagProblems:[22,23,25,27,29,30],
      startProblemIndex:1,
      endProblemIndex:30
    };

    for (let i = config.startProblemIndex; i <= config.endProblemIndex; i++) {
      this['problem'+i] = this.generateProblemData(i,config.baseArray,config.specialProblems);
    }
    this.problem16 = [['피카츄', '라이츄'], ['꼬부기','이브이']];
    this.problem2 = this.problem2.filter((pokemon)=>pokemon.includes('이'));
    this.problem3 = this.problem3.join('');
    const obj = {};
    this.problem4.forEach((pokemon) => {
      obj[pokemon] = pokemon.length;
    });
    this.problem4 = obj;
    this.problem5.sort();
    this.problem6 = this.problem6.find((pokemon) => pokemon.includes('이'));
    this.problem7 = this.problem7.every((pokemon)=>pokemon.includes('이'));
    this.problem8 = this.problem8.some((pokemon) => pokemon.startsWith('꼬'));
    this.problem9.push('이브이');
    this.problem10.pop();
    this.problem11.shift();
    this.problem12.unshift('피카츄');
    this.problem13.splice(1,1,"이브이");
    const originProblem14 = this.problem14
    const copyProblem14 = this.problem14.slice();
    copyProblem14.push('이브이');
    this.problem14 = {
      originProblem14,copyProblem14
    };
    this.problem15 = this.problem15.slice(-2);
    this.problem16 = this.problem16[0].concat(this.problem16[1]);
    this.problem17 = this.problem17.indexOf('라이츄');
    this.problem18.reverse();
    this.problem19 = this.problem19.map((pokemon) => pokemon.length);
    this.problem20 = this.problem20.filter((pokemon)=>pokemon.length>=3);
    this.problem21 = this.problem21.map((pokemon) => `<li>${pokemon}</li>`);
    this.assembleHTMLTags(config.htmlTagProblems);
    this.problem22 = `<ul>${this.problem22.join('')}</ul>`
    this.problem23 = this.problem23.filter((pokemon) => pokemon.includes('지우'));
    this.problem24 = `<select>${this.problem24.map((tag) => `<option>${tag}</option>`).join('')}</select>`;
    this.problem25 = `<nav>${this.problem25.join('')}</nav>`;
    this.problem26 = `<article>${this.problem26.map((tag) => `<section>${tag}</section>`).join('')}</article>`;
    this.problem27 = this.problem27.map((tag) => `<ol>${tag}</ol>`);
    this.problem28 = this.problem28.map((tag) => `<input placeholder=${tag}>`);
    this.problem29 = `<footer>${this.problem29}</footer>`;
    this.problem30 = `<div>${this.problem30.join('')}</div>`
  }

  generateProblemData(problemNumber, baseArray, specialProblems){
    if(specialProblems.includes(problemNumber)){
      return [...baseArray, '이브이'];
    }
    return baseArray.slice();
  }
  assembleHTMLTags(htmlTagProblems){
    for (let problem of htmlTagProblems){
      this['problem' + problem] = this['problem' + problem].map(item => {
        if(item.includes('<')){
          return item;
        }
        return `<li>${item}</li>`
      })
    }
  }
}

let forExam = new ForExam();
console.dir(forExam);
