# ngx-files
Step: 1 
In terminal root/client write:
waw add ngx-stripe

Step 2:
Import FilesModule
In your user/page.module.ts you must import StripeModule:
import { FilesModule } from 'src/app/modules';

@NgModule({
 imports: [
  FilesModule
 ]
})

Step 3:
Use this power-tag to use module:
<files></files>

Tip: : 
To initiate uploading files use
($event.target. ...)
