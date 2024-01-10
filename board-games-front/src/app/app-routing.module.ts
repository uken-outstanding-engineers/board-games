import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BoardGamesPanelComponent } from './board-games-panel/board-games-panel.component';
import { BoardCategoryPanelComponent } from './board-category-panel/board-category-panel.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { HomeSiteComponent } from './home-site/home-site.component';
import { LikedGamesComponent } from './liked-games/liked-games.component';
import { SettingsComponent } from './settings/settings.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { PermissionGuard } from './routing-guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'board-games-panel', component: BoardGamesPanelComponent, canActivate: [PermissionGuard]  },
  { path: 'category-games-panel', component: BoardCategoryPanelComponent, canActivate: [PermissionGuard] },
  { path: 'liked-games', component: LikedGamesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'comment', component: CommentListComponent },
  { path: ':id', component: GameDetailsComponent},
  { path: '', component: HomeSiteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}