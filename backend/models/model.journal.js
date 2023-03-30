const db = require("../config/db.config.js");

class SheduleModel {
  getStudentDiary(id) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT journal.id, subjects.subject_name, users.name, journal.date, notes.name as note_name, journal.rating
        FROM journal 
        inner join subjects 
        on journal.subject_id = subjects.id
        inner join notes 
        on journal.note_id = notes.id
        inner join users
        on journal.teacher_id = users.id
        WHERE student_id = ?
        order by subjects.subject_name, journal.date, notes.name`,
        [id],
        (err, results) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }
}

module.exports = new SheduleModel();
