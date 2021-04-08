from app.models import db, MusicVideo


def seed_music_videos():

    # 21 pop music videos
    mvPop1 = MusicVideo(title="Earth", genre="Pop", artist="Lil Dicky", coverart="https://upload.wikimedia.org/wikipedia/en/7/73/Lil_Dicky_-_Earth.png",
                        video_url="https://www.youtube.com/watch?v=pvuN_WvF1to&ab_channel=LilDicky")
    mvPop2 = MusicVideo(title="Sunflower", genre="Pop", artist="Post Malone", coverart="https://images-na.ssl-images-amazon.com/images/I/61kT5RTssKL._SY450_.jpg",
                        video_url="https://www.youtube.com/watch?v=ApXoWvfEYVU&ab_channel=PostMaloneVEVO")
    mvPop3 = MusicVideo(title="Perfect", genre="Pop", artist="Ed Sheeran", coverart="https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg",
                        video_url="https://www.youtube.com/watch?v=2Vv-BfVoq4g&ab_channel=EdSheeran")
    mvPop4 = MusicVideo(title="Leave the Door Open", genre="Pop", artist="Bruno Mars", coverart="https://img.discogs.com/yADEePSFkROrfTdeg4O9QksLoiM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-17714845-1615024278-5487.jpeg.jpg",
                        video_url="https://www.youtube.com/watch?v=adLGHcj_fmA&ab_channel=BrunoMars")
    mvPop5 = MusicVideo(title="Intentions", genre="Pop", artist="Justin Bieber", coverart="https://upload.wikimedia.org/wikipedia/en/1/16/Justin_Bieber_-_Changes.png",
                        video_url="https://www.youtube.com/watch?v=3AyMjyHu1bA&ab_channel=JustinBieberVEVO")
    mvPop6 = MusicVideo(title="At My Worst", genre="Pop", artist="Pink Sweat$", coverart="https://images-na.ssl-images-amazon.com/images/I/714sBD6cMsL._AC_UL600_SR600,600_.jpg",
                        video_url="https://www.youtube.com/watch?v=K_zylJH4PRI&ab_channel=PinkSweats")
    mvPop7 = MusicVideo(title="The Lazy Song", genre="Pop", artist="Bruno Mars", coverart="https://upload.wikimedia.org/wikipedia/en/e/eb/Bruno_Mars_-_Doo-Wops_%26_Hooligans.png",
                        video_url="https://www.youtube.com/watch?v=fLexgOxsZu0&ab_channel=BrunoMars")
    mvPop8 = MusicVideo(title="Old Town Road", genre="Pop", artist="Lil Nas X", coverart="https://s3.amazonaws.com/media.thecrimson.com/photos/2019/04/14/200610_1337381.jpeg",
                        video_url="https://www.youtube.com/watch?v=w2Ov5jzm3j8&ab_channel=LilNasXVEVO")
    mvPop9 = MusicVideo(title="One Thing Right", genre="Pop", artist="Kane Brown", coverart="https://upload.wikimedia.org/wikipedia/en/d/d2/Marshmello_and_Kane_Brown_-_One_Thing_Right.png",
                        video_url="https://www.youtube.com/watch?v=29a6o5vRKVM&ab_channel=Marshmello")
    mvPop10 = MusicVideo(title="Be Like That", genre="Pop", artist="Kane Brown", coverart="https://images-na.ssl-images-amazon.com/images/I/71Fe2lL8maL._SL1217_.jpg",
                         video_url="https://www.youtube.com/watch?v=GEAy7eXb2lo&ab_channel=KaneBrownVEVO")
    mvPop11 = MusicVideo(title="Better Now", genre="Pop", artist="Post Malone", coverart="https://i.pinimg.com/originals/8f/2c/ea/8f2ceaaa9e8fc7a5033abe450d9cab15.jpg",
                         video_url="https://www.youtube.com/watch?v=UYwF-jdcVjY&ab_channel=PostMaloneVEVO")
    mvPop12 = MusicVideo(title="Congratulations", genre="Pop", artist="Post Malone", coverart="https://upload.wikimedia.org/wikipedia/en/7/72/Stoneyalbum.jpg",
                         video_url="https://www.youtube.com/watch?v=SC4xMk98Pdc&ab_channel=PostMaloneVEVO")
    mvPop13 = MusicVideo(title="I'm The One", genre="Pop", artist="DJ Khaled", coverart="https://upload.wikimedia.org/wikipedia/en/8/8a/ImTheOneDJKhaled.jpg",
                         video_url="https://www.youtube.com/watch?v=weeI1G46q0o&ab_channel=DJKhaledVEVO")
    mvPop14 = MusicVideo(title="Young Dumb & Broke", genre="Pop", artist="Khalid", coverart="https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongImages/americanteen.jpg",
                         video_url="https://www.youtube.com/watch?v=IPfJnp1guPc&ab_channel=KhalidVEVO")
    mvPop15 = MusicVideo(title="Eastside", genre="Pop", artist="Benny Blanco", coverart="https://upload.wikimedia.org/wikipedia/en/2/21/Benny_Blanco%2C_Halsey_and_Khalid_Eastside.png",
                         video_url="https://www.youtube.com/watch?v=56WBK4ZK_cw&ab_channel=bennyblanco")
    mvPop16 = MusicVideo(title="7 Years", genre="Pop", artist="Luke Graham", coverart="https://i1.sndcdn.com/artworks-000161206463-wm93i3-t500x500.jpg",
                         video_url="https://www.youtube.com/watch?v=LHCob76kigA&ab_channel=LukasGraham")
    mvPop17 = MusicVideo(title="Sugar", genre="Pop", artist="Maroon 5", coverart="https://upload.wikimedia.org/wikipedia/en/5/53/Maroon_5_-_V_%28Official_Album_Cover%29.png",
                         video_url="https://www.youtube.com/watch?v=09R8_2nJtjg&ab_channel=Maroon5VEVO")
    mvPop18 = MusicVideo(title="Uptown Funk", genre="Pop", artist="Mark Ronson", coverart="https://images-na.ssl-images-amazon.com/images/I/711UjNzynnL._SL1500_.jpg",
                         video_url="https://www.youtube.com/watch?v=OPf0YbXqDm0&ab_channel=MarkRonsonVEVO")
    mvPop19 = MusicVideo(title="Happy", genre="Pop", artist="Pharrell Williams", coverart="https://upload.wikimedia.org/wikipedia/en/2/23/Pharrell_Williams_-_Happy.jpg",
                         video_url="https://www.youtube.com/watch?v=ZbZSe6N_BXs&ab_channel=PharrellWilliamsVEVO")
    mvPop20 = MusicVideo(title="Where Is The Love?", genre="Pop", artist="The Black Eyed Peas", coverart="https://upload.wikimedia.org/wikipedia/en/a/a1/Whereisthelove_cover.jpg",
                         video_url="https://www.youtube.com/watch?v=WpYeekQkAdc&ab_channel=BlackEyedPeasVEVO")
    mvPop21 = MusicVideo(title="Unforgettable", genre="Pop", artist="French Montana", coverart="https://upload.wikimedia.org/wikipedia/en/d/d5/FrenchMontanaUnforgettable.jpg",
                         video_url="https://www.youtube.com/watch?v=CTFtOOh47oo&ab_channel=FrenchMontanaVEVO")

# 21 rap music videos

    mvRap1 = MusicVideo(title="God's Plan", genre="Rap", artist="Drake", coverart="https://thatgrapejuice.net/wp-content/uploads/2019/01/drake-scorpion-album-cover-1530300038-640x640.jpg",
                        video_url="https://www.youtube.com/watch?v=xpVfcZ0ZcFM&ab_channel=DrakeVEVO")
    mvRap2 = MusicVideo(title="SICKO MODE", genre="Rap", artist="Travis Scott", coverart="https://upload.wikimedia.org/wikipedia/en/0/0b/Astroworld_by_Travis_Scott.jpg",
                        video_url="https://www.youtube.com/watch?v=6ONRf7h3Mdk&ab_channel=TravisScottVEVO")
    mvRap3 = MusicVideo(title="ROCKSTAR", genre="Rap", artist="DaBaby", coverart="https://upload.wikimedia.org/wikipedia/en/c/c2/DaBaby_-_Blame_It_on_Baby.png",
                        video_url="https://www.youtube.com/watch?v=4PDpVNKZgKg&ab_channel=DaBabyVEVO")
    mvRap4 = MusicVideo(title="WHAT YOU KNOW BOUT LOVE", genre="Rap", artist="POP SMOKE", coverart="https://images-na.ssl-images-amazon.com/images/I/61v3LCkWMvL._AC_UL600_SR600,600_.jpg",
                        video_url="https://www.youtube.com/watch?v=uuodbSVO3z0&ab_channel=POPSMOKE")
    mvRap5 = MusicVideo(title="Devastated", genre="Rap", artist="Joey Bada$$", coverart="https://upload.wikimedia.org/wikipedia/en/4/40/DevastatedJoeyBadass.jpg",
                        video_url="https://www.youtube.com/watch?v=RLnA25dVzrQ&ab_channel=PROERA")
    mvRap6 = MusicVideo(title="Life Is Good", genre="Rap", artist="Future", coverart="https://upload.wikimedia.org/wikipedia/en/8/8b/Future_-_Life_Is_Good.png",
                        video_url="https://www.youtube.com/watch?v=l0U7SxXHkPY&ab_channel=FutureVEVO")
    mvRap7 = MusicVideo(title="a lot", genre="Rap", artist="21 Savage", coverart="https://townsquare.media/site/812/files/2018/12/21-savage-2.jpg",
                        video_url="https://www.youtube.com/watch?v=DmWWqogr_r8&ab_channel=21SavageVEVO")
    mvRap8 = MusicVideo(title="MIDDLE CHILD", genre="Rap", artist="J. Cole", coverart="https://upload.wikimedia.org/wikipedia/en/4/4f/J._Cole_-_Middle_Child.png",
                        video_url="https://www.youtube.com/watch?v=WILNIXZr2oc&ab_channel=JColeVEVO")
    mvRap9 = MusicVideo(title="Kevin's Heart", genre="Rap", artist="J. Cole", coverart="https://images-na.ssl-images-amazon.com/images/I/81JWjUzu6ZL._SL1400_.jpg",
                        video_url="https://www.youtube.com/watch?v=ufynqs_COF4&ab_channel=J.Cole")
    mvRap10 = MusicVideo(title="Under The Sun", genre="Rap", artist="Dreamville", coverart="https://m.media-amazon.com/images/I/61xYZaV8RTL._SS500_.jpg",
                         video_url="https://www.youtube.com/watch?v=eUUuI--jAlM&ab_channel=Dreamville")
    mvRap11 = MusicVideo(title="Tyler Herro", genre="Rap", artist="Jack Harlow", coverart="https://upload.wikimedia.org/wikipedia/en/4/45/Jack_Harlow_-_Tyler_Herro.png",
                         video_url="https://www.youtube.com/watch?v=np9Ub1LilKU&ab_channel=JackHarlow")
    mvRap12 = MusicVideo(title="WHATS POPPIN", genre="Rap", artist="Jack Harlow", coverart="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/ahwgxftuidsu67oygvdg/poppin",
                         video_url="https://www.youtube.com/watch?v=HIwAI05Y1fU&ab_channel=JackHarlow")
    mvRap13 = MusicVideo(title="iSpy", genre="Rap", artist="KYLE", coverart="https://upload.wikimedia.org/wikipedia/en/5/55/ISpykylesong.png",
                         video_url="https://www.youtube.com/watch?v=5XK4v2fgMPU&ab_channel=SuperDuperKyle")
    mvRap14 = MusicVideo(title="Finer Things", genre="Rap", artist="Polo G", coverart="https://m.media-amazon.com/images/I/81s9IJmzArL._SS500_.jpg",
                         video_url="https://www.youtube.com/watch?v=65FcjY-2iw8&ab_channel=PoloG")
    mvRap15 = MusicVideo(title="Old Streets", genre="Rap", artist="2KBABY", coverart="https://img.discogs.com/y9AYpRF8gm1lmwIhryAF1RHOpRU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-15033273-1585774039-8565.jpeg.jpg",
                         video_url="https://www.youtube.com/watch?v=VELx3GwlF8s&ab_channel=WORLDSTARHIPHOP")
    mvRap16 = MusicVideo(title="Shooters", genre="Rap", artist="Tory Lanez", coverart="http://exclaim.ca/images/ToryShooters.jpg",
                         video_url="https://www.youtube.com/watch?v=UM1H43eKofk&ab_channel=ToryLanezVEVO")
    mvRap17 = MusicVideo(title="Say It", genre="Rap", artist="Tory Lanez", coverart="https://upload.wikimedia.org/wikipedia/en/d/d9/SayItSingle.jpg",
                         video_url="https://www.youtube.com/watch?v=xUq1rZ7mmns&ab_channel=ToryLanezVEVO")
    mvRap18 = MusicVideo(title="Live Up To My Name", genre="Rap", artist="BAKA NOT NICE", coverart="https://m.media-amazon.com/images/I/71wHL4UE4dL._SS500_.jpg",
                         video_url="https://www.youtube.com/watch?v=1CG42XV0LOE&ab_channel=BAKANOTNICE")
    mvRap19 = MusicVideo(title="Jungle", genre="Rap", artist="A Boogie Wit Da Hoodie", coverart="https://wallpapercave.com/wp/wp4468432.jpg",
                         video_url="https://www.youtube.com/watch?v=GfxcnX7XWfg&ab_channel=ABoogieWitdaHoodie")
    mvRap20 = MusicVideo(title="For The Night", genre="Rap", artist="POP SMOKE", coverart="https://i.pinimg.com/736x/d7/76/54/d7765419c84eb88cd5fa84afcb3964f5.jpg",
                         video_url="https://www.youtube.com/watch?v=Q9pjm4cNsfc&ab_channel=POPSMOKEVEVO")
    mvRap21 = MusicVideo(title="Palm Trees", genre="Rap", artist="Flatbush Zombies", coverart="https://i1.sndcdn.com/artworks-000050815470-4vjw0i-t500x500.jpg",
                         video_url="https://www.youtube.com/watch?v=kfzRXseSBIM&ab_channel=FlatbushZombiesTV")

# 21 rock music videos

    mvRock1 = MusicVideo(title="Bohemian Rhapsody", genre="Rock", artist="Queen", coverart="https://i.pinimg.com/originals/57/79/91/57799195bf2814769f27c598bb27e435.jpg",
                         video_url="https://www.youtube.com/watch?v=fJ9rUzIMcZQ&ab_channel=QueenOfficial")
    mvRock2 = MusicVideo(title="Cult Of Personality", genre="Rock", artist="Living Colour", coverart="https://i1.sndcdn.com/artworks-000159109823-b10zib-t500x500.jpg",
                         video_url="https://www.youtube.com/watch?v=7xxgRUyzgs0&ab_channel=LivingColourVEVO")
    mvRock3 = MusicVideo(title="Under The Bridge", genre="Rock", artist="Red Hot Chili Peppers", coverart="https://m.media-amazon.com/images/I/81hS2wgxbhL._SS500_.jpg",
                         video_url="https://www.youtube.com/watch?v=GLvohMXgcBo&ab_channel=RedHotChiliPeppers")
    mvRock4 = MusicVideo(title="Back In Black", genre="Rock", artist="AC/DC", coverart="https://upload.wikimedia.org/wikipedia/commons/9/92/ACDC_Back_in_Black.png",
                         video_url="https://www.youtube.com/watch?v=pAgnJDJN4VA&ab_channel=acdcVEVO")
    mvRock5 = MusicVideo(title="Can't Stop", genre="Rock", artist="Red Hot Chili Peppers", coverart="https://upload.wikimedia.org/wikipedia/en/8/8e/RedHotChiliPeppersCantStop.jpg",
                         video_url="https://www.youtube.com/watch?v=8DyziWtkfBw&ab_channel=RedHotChiliPeppers")
    mvRock6 = MusicVideo(title="Dark Necessities", genre="Rock", artist="Red Hot Chili Peppers", coverart="https://upload.wikimedia.org/wikipedia/en/a/ae/Thegetawayalbum.jpg",
                         video_url="https://www.youtube.com/watch?v=Q0oIoR9mLwc&ab_channel=RedHotChiliPeppers")
    mvRock7 = MusicVideo(title="Say It Ain't So", genre="Rock", artist="Weezer", coverart="https://upload.wikimedia.org/wikipedia/en/b/be/Weezer_say_it_ain%27t_so.png",
                         video_url="https://www.youtube.com/watch?v=ENXvZ9YRjbo&ab_channel=WeezerVEVO")
    mvRock8 = MusicVideo(title="Flavor Of The Weak", genre="Rock", artist="American Hi-Fi", coverart="https://img.discogs.com/k8TnL7dPKZH3loY5CnhHTjDGMU4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-509429-1271894043.jpeg.jpg",
                         video_url="https://www.youtube.com/watch?v=uAmINmjpQxw&ab_channel=AmericanHiFiVEVO")
    mvRock9 = MusicVideo(title="You're Gonna Go Far, Kid", genre="Rock", artist="The Offspring", coverart="https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/The_Offspring_-_Rise_and_Fall%2C_Rage_and_Grace.jpg/220px-The_Offspring_-_Rise_and_Fall%2C_Rage_and_Grace.jpg",
                         video_url="https://www.youtube.com/watch?v=ql9-82oV2JE&ab_channel=OffspringVEVO")
    mvRock10 = MusicVideo(title="Crazy Train", genre="Rock", artist="Ozzy Osbourne", coverart="https://upload.wikimedia.org/wikipedia/en/2/23/Blizzard_of_ozz.jpg",
                          video_url="https://www.youtube.com/watch?v=tMDFv5m18Pw&ab_channel=OzzyOsbourneVEVO")
    mvRock11 = MusicVideo(title="Iron Man", genre="Rock", artist="BLACK SABBATH", coverart="http://a10.gaanacdn.com/images/albums/37/1936437/crop_480x480_1936437.jpg",
                          video_url="https://www.youtube.com/watch?v=5s7_WbiR79E&ab_channel=BlackSabbath")
    mvRock12 = MusicVideo(title="Master Exploder", genre="Rock", artist="Tenacious D", coverart="https://images-na.ssl-images-amazon.com/images/I/81vKx0wr%2BDL._SL1500_.jpg",
                          video_url="https://www.youtube.com/watch?v=80DtQD5BQ_A&ab_channel=SeanIzen")
    mvRock13 = MusicVideo(title="Kickapoo", genre="Rock", artist="Tenacious D", coverart="https://images-na.ssl-images-amazon.com/images/I/81vKx0wr%2BDL._SL1500_.jpg",
                          video_url="https://www.youtube.com/watch?v=hvvjiE4AdUI&ab_channel=NewLine")
    mvRock14 = MusicVideo(title="Tribute", genre="Rock", artist="Tenacious D", coverart="https://images-na.ssl-images-amazon.com/images/I/81vKx0wr%2BDL._SL1500_.jpg",
                          video_url="https://www.youtube.com/watch?v=_lK4cX5xGiQ&ab_channel=tenaciousDVEVO")
    mvRock15 = MusicVideo(title="Beezleboss", genre="Rock", artist="Tenacious D", coverart="https://images-na.ssl-images-amazon.com/images/I/81vKx0wr%2BDL._SL1500_.jpg",
                          video_url="https://www.youtube.com/watch?v=y8-LH_VUROk&ab_channel=MrMojoRisinV")
    mvRock16 = MusicVideo(title="POD", genre="Rock", artist="Tenacious D", coverart="https://images-na.ssl-images-amazon.com/images/I/81vKx0wr%2BDL._SL1500_.jpg",
                          video_url="https://www.youtube.com/watch?v=h27xucvYtRs&ab_channel=tenaciousDVEVO")
    mvRock17 = MusicVideo(title="Smells Like Teen Spirit", genre="Rock", artist="Nirvana", coverart="https://f4.bcbits.com/img/a0464801798_10.jpg",
                          video_url="https://www.youtube.com/watch?v=hTWKbfoikeg&ab_channel=NirvanaVEVO")
    mvRock18 = MusicVideo(title="In Bloom", genre="Rock", artist="Nirvana", coverart="https://f4.bcbits.com/img/a0464801798_10.jpg",
                          video_url="https://www.youtube.com/watch?v=PbgKEjNBHqM&ab_channel=NirvanaVEVO")
    mvRock19 = MusicVideo(title="Livin' On A Prayer", genre="Rock", artist="Bon Jovi", coverart="https://upload.wikimedia.org/wikipedia/en/c/c6/LivinOnAPrayer%28hq%29.jpg",
                          video_url="https://www.youtube.com/watch?v=lDK9QqIzhwk&ab_channel=BonJoviVEVO")
    mvRock20 = MusicVideo(title="You Give Love A Bad Name", genre="Rock", artist="Bon Jovi", coverart="https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/YouGiveLoveABadName.jpg/220px-YouGiveLoveABadName.jpg",
                          video_url="https://www.youtube.com/watch?v=KrZHPOeOxQQ&ab_channel=BonJoviVEVO")
    mvRock21 = MusicVideo(title="Stairway To Heaven", genre="Rock", artist="Led Zeppelin", coverart="https://www.ultimate-guitar.com/static/article/news/1/69761_ver1516630290.jpg",
                          video_url="https://www.youtube.com/watch?v=ovFSEHH_yJw&ab_channel=HeshamRabeey")

    db.session.add(mvPop1)
    db.session.add(mvPop2)
    db.session.add(mvPop3)
    db.session.add(mvPop4)
    db.session.add(mvPop5)
    db.session.add(mvPop6)
    db.session.add(mvPop7)
    db.session.add(mvPop8)
    db.session.add(mvPop9)
    db.session.add(mvPop10)
    db.session.add(mvPop11)
    db.session.add(mvPop12)
    db.session.add(mvPop13)
    db.session.add(mvPop14)
    db.session.add(mvPop15)
    db.session.add(mvPop16)
    db.session.add(mvPop17)
    db.session.add(mvPop18)
    db.session.add(mvPop19)
    db.session.add(mvPop20)
    db.session.add(mvPop21)

    db.session.add(mvRap1)
    db.session.add(mvRap2)
    db.session.add(mvRap3)
    db.session.add(mvRap4)
    db.session.add(mvRap5)
    db.session.add(mvRap6)
    db.session.add(mvRap7)
    db.session.add(mvRap8)
    db.session.add(mvRap9)
    db.session.add(mvRap10)
    db.session.add(mvRap11)
    db.session.add(mvRap12)
    db.session.add(mvRap13)
    db.session.add(mvRap14)
    db.session.add(mvRap15)
    db.session.add(mvRap16)
    db.session.add(mvRap17)
    db.session.add(mvRap18)
    db.session.add(mvRap19)
    db.session.add(mvRap20)
    db.session.add(mvRap21)

    db.session.add(mvRock1)
    db.session.add(mvRock2)
    db.session.add(mvRock3)
    db.session.add(mvRock4)
    db.session.add(mvRock5)
    db.session.add(mvRock6)
    db.session.add(mvRock7)
    db.session.add(mvRock8)
    db.session.add(mvRock9)
    db.session.add(mvRock10)
    db.session.add(mvRock11)
    db.session.add(mvRock12)
    db.session.add(mvRock13)
    db.session.add(mvRock14)
    db.session.add(mvRock15)
    db.session.add(mvRock16)
    db.session.add(mvRock17)
    db.session.add(mvRock18)
    db.session.add(mvRock19)
    db.session.add(mvRock20)
    db.session.add(mvRock21)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_music_videos():
    db.session.execute('TRUNCATE music_videos;')
    db.session.commit()
