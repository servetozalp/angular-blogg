import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeDislikeService {

  private localStorageKey = 'likeDislikeCounts';
  private countsMap: { [blogID: string]: { likes: number; dislikes: number } } = {};

  constructor() {
    // Initialize counts from local storage or default to 0
    const storedCounts = JSON.parse(localStorage.getItem(this.localStorageKey) ?? '{}');
    this.countsMap = storedCounts;
  }

  getLikesCount(blogID: string): number {
    return this.countsMap[blogID] ? this.countsMap[blogID].likes : 0;
  }

  getDislikesCount(blogID: string): number {
    return this.countsMap[blogID] ? this.countsMap[blogID].dislikes : 0;
  }

  like(blogID: string): void {
    if (!this.countsMap[blogID]) {
      this.countsMap[blogID] = { likes: 0, dislikes: 0 };
    }
    this.countsMap[blogID].likes++;
    this.updateLocalStorage();
  }

  dislike(blogID: string): void {
    if (!this.countsMap[blogID]) {
      this.countsMap[blogID] = { likes: 0, dislikes: 0 };
    }
    this.countsMap[blogID].dislikes++;
    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.countsMap));
  }
}
