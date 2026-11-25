# matte.py <cam.mp4 1080x1920> <out.webm> : person cut-out (VP9 + alpha, crf 12 so the face stays sharp) with MediaPipe selfie_multiclass_256x256 (pip mediapipe==0.10.33, apt libgles2 libegl1).
import sys,cv2,numpy as np,mediapipe as mp,subprocess
from mediapipe.tasks.python import vision, BaseOptions
src,out=sys.argv[1],sys.argv[2]
seg=vision.ImageSegmenter.create_from_options(vision.ImageSegmenterOptions(base_options=BaseOptions(model_asset_path='/tmp/claude-0/models/selfie_multiclass.tflite'),running_mode=vision.RunningMode.VIDEO,output_confidence_masks=True))
cap=cv2.VideoCapture(src);W,H=1080,1920
p=subprocess.Popen(['ffmpeg','-loglevel','error','-y','-f','rawvideo','-pix_fmt','rgba','-s',f'{W}x{H}','-r','30','-i','-','-c:v','libvpx-vp9','-pix_fmt','yuva420p','-crf','12','-b:v','0','-auto-alt-ref','0','-row-mt','1','-deadline','good','-cpu-used','4',out],stdin=subprocess.PIPE)
i=0;prev=None
while True:
    ok,fr=cap.read()
    if not ok: break
    rgb=cv2.cvtColor(fr,cv2.COLOR_BGR2RGB)
    r=seg.segment_for_video(mp.Image(image_format=mp.ImageFormat.SRGB,data=rgb),int(i*1000/30))
    bg=r.confidence_masks[0].numpy_view()
    m=1.0-bg
    m=cv2.resize(m,(W,H),interpolation=cv2.INTER_LINEAR)
    if prev is not None: m=0.6*m+0.4*prev
    prev=m
    a=np.clip((m-0.35)/0.3,0,1)
    a=cv2.GaussianBlur(a,(0,0),2.0)
    rgba=np.dstack([rgb,(a*255).astype(np.uint8)])
    p.stdin.write(rgba.tobytes()); i+=1
p.stdin.close();p.wait();print('frames',i)
