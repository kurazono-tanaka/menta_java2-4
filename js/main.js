'use strict';

{
  class Task {
    constructor(contents,genre,index) {
      this.contents = contents;
      this.genre = genre;
      this.index = index;
    }
    show() {
      console.log(`${this.index} : [内容]${this.contents}、[ジャンル]${this.genre}`);
    }
  }

  const tasks = [
    new Task('机を片付ける','掃除',0),
    new Task('牛乳を買う','買い物',1),
    new Task('散歩する','運動',2),
  ];

  function showTask() {
    console.log('======================');
    console.log('現在持っているタスク一覧');
    console.log('======================');
    tasks.forEach((task) => {
      task.show();
    });
  }

  //初回の表示
  showTask();

  const inputContents = prompt('タスクを入力してください');
  const inputGenre = prompt('ジャンルを入力してください');
  alert('新しいタスクを追加しました。');
  tasks.push( new Task(inputContents,inputGenre,tasks.length) );
  showTask();

  const inputStatus = prompt('「確認、追加、削除、終了」の４つのいづれかを入力してください。');

}