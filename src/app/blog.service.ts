import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Blog } from './blog-repository/blog-repository';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private recentBlogs: Blog[] = [
    {
      blogID: '1',
      title: 'Välkommen till Paris - Staden av Kärlek och Ljus!',
      thumbnailUrl: 'https://picsum.photos/id/318/1000/1000',
      body: 'Paris, den romantiska staden vid Seine, förtrollar med sin tidlösa skönhet och kulturella rikedom. Eiffeltornet, Paris mest kända landmärke, dominerar horisonten och bjuder på hisnande panoramavyer. Louvren, världens största konstmuseum, lockar konstälskare från hela världen med mästerverk som Mona Lisa. Gamla stadsdelar som Montmartre pulserar av bohemisk atmosfär och konstnärlig själ. Seinefloden slingrar sig genom staden och skapar en romantisk bakgrund för kvällspromenader och båtturer. Paris gastronomiska scen, från de charmiga boulangerierna till de exklusiva restaurangerna, är en kulinarisk fest. Staden kombinerar elegans och tradition med modernitet, vilket gör den till en evig lockelse för besökare världen över.',
      creationDate: new Date('2023-11-17T10:30:00Z'),
      likes: 8,
      dislikes: 2,
      comments: [],
    },

    {
      blogID: '2',
      title:
        'Välkommen till Brygge - Staden av Medeltida Romantik och Belgiskt Godis!',
      thumbnailUrl: 'https://picsum.photos/id/257/1000/999',
      body: 'Brygge, en förtrollande stad i Belgien, charmar besökare med sin välbevarade medeltida arkitektur och pittoreska kanaler. Gamla stan, som är upptagen på UNESCO:s världsarvslista, erbjuder en atmosfär av romantik och historia med sina kullerstensgator och imponerande byggnader. Belforttornet dominerar stadssiluetten och belönar de som vågar klättra upp med en panoramautsikt över stadens takåsar. De karakteristiska kanalerna som ringlar genom staden skapar en idyllisk inramning och ger möjlighet till avkopplande båtturer. Brygge är känt för sitt choklad och öl, och det är ett nöje att utforska lokala chokladbutiker och ölkaféer. Med en atmosfär av romantik och välbevarad charm är Brygge en pärla som tar besökare tillbaka i tiden och erbjuder en unik upplevelse av belgisk kultur och tradition.',
      creationDate: new Date('2023-10-27T10:30:00Z'),
      likes: 14,
      dislikes: 2,
      comments: [
        'quidem eligendi natus tempore iste omnis voluptates fuga ex repudiandae consequatur libero doloremque ipsa, ipsum soluta architecto. Quidem nobis voluptas architecto explicabo harum totam veniam possimus natus itaque laborum porro labore distinctio accusamus quis.',

        'quidem eligendi natus tempore iste omnis voluptates fuga ex repudiandae consequatur libero doloremque ipsa, ipsum solutaus natus itaque laborum porro labore distinctio accusamus quis.',
      ],
    },

    {
      blogID: '3',
      title:
        'Välkommen till New York - Staden som Aldrig Sover och Pulserar av Oändliga Möjligheter!',
      thumbnailUrl: 'https://picsum.photos/id/376/1000/998',
      body: 'New York, staden som aldrig sover, fascinerar med sin ikoniska skyline och pulserande energi. Manhattan, med sina höga skyskrapor som Empire State Building och One World Trade Center, är hjärtat av finans och kultur. Central Park, en grönskande oas mitt i stadens livliga tempo, erbjuder en fristad för avkoppling och rekreation. Broadway lyser upp nätterna med spektakulära teaterföreställningar och Times Square pulserar av färg och rörelse dygnet runt. New Yorks mångfald av stadsdelar, från det bohemiska Greenwich Village till det trendiga Williamsburg i Brooklyn, skapar en kulturell mångfald som är svårslagen. Metropolitan Museum of Art och Museum of Modern Art (MoMA) tillfredsställer konstälskare, medan shopping på Fifth Avenue och Brooklyn Flea Market lockar shopaholics. New York är en stad där möjligheterna är oändliga och där varje gata berättar en unik historia i denna globala smältdegel av kultur och innovation.',
      creationDate: new Date('2023-10-05T10:30:00Z'),
      likes: 7,
      dislikes: 2,
      comments: [],
    },

    {
      blogID: '4',
      title:
        'Välkommen till Washington, D.C. - Staden av Amerikansk Historia och Politisk Signifikans!',
      thumbnailUrl: 'https://picsum.photos/id/299/1000/997',
      body: 'Washington, D.C., nationens huvudstad, strålar av politisk och historisk betydelse. Mallen, en bred boulevard som sträcker sig från Capitol Hill till Lincoln Memorial, hyser några av Amerikas mest ikoniska monument och museer. Capitolium, där kongressen sammanträder, och Vita huset, residenset för USA:s president, är symboler för landets demokratiska institutioner. National Mall flankeras av Smithsonian-museerna, inklusive National Air and Space Museum och National Museum of American History, som båda rymmer ovärderliga artefakter. Monument som Washingtons obelisk och Vietnam Veterans Memorial belyser landets historia och dess kämpande anda. Det historiska Georgetown erbjuder charmiga kullerstensgator och butiker. Washington, D.C., är en stad där politik och kultur möts och där varje hörn påminner om nationens stora arv.',
      creationDate: new Date('2023-09-20T10:30:00Z'),
      likes: 7,
      dislikes: 2,
      comments: [],
    },

    {
      blogID: '5',
      title:
        'Välkommen till Stockholm - Staden av Skärgårdens Charm och Modern Kreativitet!',
      thumbnailUrl: 'https://picsum.photos/id/288/1000/996',
      body: 'Stockholm, Sveriges pulserande huvudstad, förenar sin rika historia med moderna stadslandskap och en omgivande skärgård. Gamla Stan, stadens historiska hjärta, lockar med kullerstensgator och ikoniska platser som Kungliga slottet. Den omgivande skärgården, med sina tusentals öar, erbjuder en unik möjlighet att uppleva naturens skönhet. Staden hyser imponerande museer som Vasa-museet och Moderna Museet och lockar med grönområden som Kungliga Nationalstadsparken. Hållbarhet genomsyrar staden, vilket återspeglas i dess gröna initiativ och effektiva kollektivtrafiksystem. Stockholm är en harmonisk blandning av kultur, design, och natursköna upplevelser.',
      creationDate: new Date('2023-09-08T10:30:00Z'),
      likes: 7,
      dislikes: 2,
      comments: [],
    },
  ];

  getRecentBlogs(): Observable<Blog[]> {
    return of(this.recentBlogs);
  }

  private commentsSubject = new BehaviorSubject<string[]>([]);
  comments$ = this.commentsSubject.asObservable();

  addComment(blogID: string, comment: string): Observable<any> {
    const blog = this.recentBlogs.find((b) => b.blogID === blogID);

    if (blog) {
      blog.comments.push(comment);
      this.commentsSubject.next([...blog.comments]);
      return of({ success: true });
    } else {
      return throwError('Blog not found');
    }
  }

  getBlogByID(blogID: string): Observable<Blog> {
    const blog = this.recentBlogs.find((b) => b.blogID === blogID);
    return blog ? of(blog) : throwError('Blog not found');
  }
}
