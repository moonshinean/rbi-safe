import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import {StTakingExamComponent} from '../../business/safetrain/st-online-exam/st-taking-exam/st-taking-exam.component';
import {PublicMethodService} from '../public/public-method.service';
import {ConfirmationService} from 'primeng/api';
import {LocalStorageService} from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TaskExamGuard implements CanDeactivate<StTakingExamComponent> {
    constructor(
      private toolSrv: PublicMethodService,
      private localSrv: LocalStorageService,
    ) {
    }
  canDeactivate(component: StTakingExamComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return  new Observable((observable) => {
      if (this.localSrv.get('openExam') === '0'){
        this.toolSrv.setConfirmationWarn('退出提醒', '您的考试正在进行, 您确定要离开吗? 您离开后考试记录会作废。', () => {
          observable.next(true);
          observable.complete();
          // observable.
        });
      }else {
        observable.next(true);
        observable.complete();
      }
    });
    // return window.confirm('你还没有保存，确定要离开吗？');
  }
}
