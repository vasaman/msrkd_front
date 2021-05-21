import http from "./baseservice";

class StudentService{
    getAll(){
        return http.get('/student');
    }
    post(){
        // eslint-disable-next-line no-undef
        return http.post('/student',data);
    }
    
}
export default new StudentService();