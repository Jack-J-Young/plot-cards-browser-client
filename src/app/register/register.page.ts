import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private service: DataService) { }

  ngOnInit() {
  }

  response: any

  post(){
    let emailVal = (document.getElementById('email') as HTMLInputElement).value;
    let passwordVal = (document.getElementById('password') as HTMLInputElement).value;
    console.log(emailVal, passwordVal);

    // const regData = new FormData();
    // regData.append('email', emailVal)
    // regData.append('password', passwordVal)

    const regData =
    {
      "email": emailVal,
      "password": passwordVal
    }

    console.log(regData);

    this.service.register(regData).subscribe (
      (res) => {
        this.response = res
        console.log(res)
      },
      (err) => {
        console.log(err);
      });
  }
}
