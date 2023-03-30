const db = require("../config/db.config.js");

class SheduleModel {
  getShedule() {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT schedule.id, schedule.time, cabinets.num_cabinet, subjects.subject_name, users.name, schedule.date, classes.name as class_name
        FROM schedule 
        inner join cabinets 
        on schedule.cabinet_id = cabinets.id
        inner join subjects 
        on schedule.subject_id = subjects.id
        inner join users 
        on schedule.teacher_id = users.id
        inner join classes 
        on schedule.class_id = classes.id
        order by schedule.date, schedule.time`,
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
        `SELECT schedule.id, schedule.time, cabinets.num_cabinet, subjects.subject_name, users.name, schedule.date, classes.name as class_name
        FROM schedule 
        inner join cabinets 
        on schedule.cabinet_id = cabinets.id
        inner join subjects 
        on schedule.subject_id = subjects.id
        inner join users 
        on schedule.teacher_id = users.id
        inner join classes 
        on schedule.class_id = classes.id
        WHERE teacher_id = ?
        order by schedule.date, schedule.time`,
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
        WHERE class_id = ?
        order by schedule.date, schedule.time`,
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
