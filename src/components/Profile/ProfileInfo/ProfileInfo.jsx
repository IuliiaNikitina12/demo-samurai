import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.coverImage}>
                {/* <img src='https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg' /> */}
            </div>
            <div className={s.descriptionBlock}>
                {profile.aboutMe}
                <img src={profile.photos.small} />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    );
}

export default ProfileInfo;