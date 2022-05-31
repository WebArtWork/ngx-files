# ngx-files
Step: 1 
In terminal root/client write:
waw add ngx-files

Step 2:
```
Import FilesModule
In your user/page.module.ts you must import FilesModule:
import { FilesModule } from 'src/app/modules/files/files.module';
```

```
@NgModule({
 imports: [
  FilesModule
 ]
})
```
Step 3:
```
Use this power-tag to use module:
<files></files>
```
```
Step 4:
Add FilesModule to client/app.module.ts
```

Tip: : 
To initiate uploading files use
($event.target. ...)
