const db = require("../config/db.config.js");

class SheduleModel {
  getShedule() {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT schedule.id, schedule.time, cabinets.num_cabinet, subjects.subject_name, users.name, schedule.date
        FROM schedule 
        inner join cabinets 
        on schedule.cabinet_id = cabinets.id
        inner join subjects 
        on schedule.subject_id = subjects.id
        inner join users 
        on schedule.teacher_id = users.id`,
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

  getSheduleForTeacher(id) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT schedule.id, schedule.time, cabinets.num_cabinet, subjects.subject_name, users.name, schedule.date
        FROM schedule 
        inner join cabinets 
        on schedule.cabinet_id = cabinets.id
        inner join subjects 
        on schedule.subject_id = subjects.id
        inner join users 
        on schedule.teacher_id = users.id
        WHERE teacher_id = ?`,
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

  getSheduleForStudent(id) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT schedule.id, schedule.time, cabinets.num_cabinet, subjects.subject_name, users.name, schedule.date
        FROM schedule 
        inner join cabinets 
        on schedule.cabinet_id = cabinets.id
        inner join subjects 
        on schedule.subject_id = subjects.id
        inner join users 
        on schedule.teacher_id = users.id
        WHERE class_id = ?`,
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
