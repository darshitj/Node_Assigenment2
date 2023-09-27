const { student } = require("../Model/student_model");

exports.student_data_disply = async (req, res) => {
  const students = await student.find({});

  res.render("student", { students });
};



exports.student_create = async (req, res) => {
  const { first_name, last_name, marks, attendance } = req.body;
  const student_pic = req.file.filename;

  const student_create = await new student({
    first_name: first_name,
    last_name: last_name,
    student_pic: student_pic,
    marks: marks,
    attendance: attendance,
  }).save();

  if (student_create) {
    res.redirect("/student_home") ;
  }
};

exports.student_delete = async (req, res) => {
    console.log(req.params.id);
  const student_delete = await student.findByIdAndDelete(req.params.id);
  if (student_delete) {
    res.redirect("/student_home") ;
  }
};


exports.student_edit_display = async(req,res)=>{
  const studentId = req.params.id;
  const students = await student.findById(studentId);
  res.render('student_edit', { students });
}

exports.student_edit = async (req, res) => {
  const id = req.params.id;
    const {  first_name, last_name, marks, attendance } = req.body;
    const student_pic = req.file.filename;
  
    try {
      const updatedStudent = await student.findByIdAndUpdate(id, {
        first_name,
        last_name,
        student_pic,
        marks,
        attendance,
      });
  
      if (!updatedStudent) {
        return res.status(404).send('Student not found');
      }
  
      res.redirect('/student_home');
    } catch (error) {
      console.error('Error updating student:', error);
      res.status(500).send('Internal Server Error');
    }
  };
  