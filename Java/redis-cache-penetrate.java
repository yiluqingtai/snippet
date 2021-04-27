  
/**
 *
 * File:    redis-cache-penetrate.java
 *          redis缓存穿透解决：缓存空对象
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/21
 *          
 **/

class CachePenetrate {
    public String search (String key) {
        String cacheValue = cache.get(key);
        if (StringUtils.isBlank(cacheValue)) {
            String storageValue = storage.get(key);
            cache.set(key, storageValue);
            if (StringUtils.isBlank(storageValue)) {
                cache.expire(key, 60 * 5);
            }
            return storageValue;
        }
        return cacheValue;
    }
}