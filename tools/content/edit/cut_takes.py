# cut_takes.py <src> <outdir> <segs.json [[a,b,(gainDb)],..]> [screen_offset screen_src] : cuts the chosen takes (seek per take, low memory), joins them; screen clip cropped below the browser bar.
import subprocess,sys,json,os
# usage: cut.py src outdir segs.json [scr_offset scr_src]
src,od,segf=sys.argv[1:4]; segs=json.load(open(segf)); os.makedirs(od,exist_ok=True)
def ff(*a): subprocess.run(['ffmpeg','-loglevel','error','-y',*a],check=True)
cl=[];sl=[];al=[]
for i,sg in enumerate(segs):
    a,b=sg[0],sg[1]; g=sg[2] if len(sg)>2 else 0
    d=b-a
    ff('-ss',str(a),'-i',src,'-t',str(d),'-map','0:v:0','-vf','fps=30,scale=1080:1920:flags=lanczos,setsar=1','-frames:v',str(round(d*30)),'-c:v','libx264','-preset','fast','-crf','15','-pix_fmt','yuv420p','-an',f'{od}/c{i}.mp4')
    ff('-ss',str(a),'-i',src,'-t',str(d),'-map','0:a:0','-af',f'volume={g}dB,afade=t=in:d=0.015,afade=t=out:st={d-0.03:.3f}:d=0.03','-ar','48000','-ac','1','-c:a','pcm_s16le',f'{od}/a{i}.wav')
    cl.append(f'c{i}.mp4');al.append(f'a{i}.wav')
    if len(sys.argv)>4:
        off=float(sys.argv[4])
        ff('-ss',str(a-off),'-i',sys.argv[5],'-t',str(d),'-vf','fps=30,crop=2560:1298:0:142,scale=2160:1096:flags=lanczos,setsar=1','-frames:v',str(round(d*30)),'-an','-c:v','libx264','-preset','fast','-crf','15','-pix_fmt','yuv420p',f'{od}/s{i}.mp4'); sl.append(f's{i}.mp4')
def cat(lst,out,extra):
    open(f'{od}/l.txt','w').write(''.join(f"file '{x}'\n" for x in lst))
    ff('-f','concat','-safe','0','-i',f'{od}/l.txt',*extra,f'{od}/{out}')
cat(cl,'cam.mp4',['-c','copy']); cat(al,'voice.wav',['-c','copy'])
if sl: cat(sl,'scr.mp4',['-c','copy'])
print('ok',sum(round((x[1]-x[0])*30) for x in segs)/30)
