import logging
import os
import shlex
import sys
import time
import random
import urllib2


log = logging.getLogger(__name__)
logging.basicConfig()
log.setLevel(level=logging.INFO)
#log.setLevel(level=logging.DEBUG)


def safe_mkdir(newdir):
    result_dir = os.path.abspath(newdir)
    try:
        os.makedirs(result_dir)
    except OSError, info:
        if info.errno == 17 and os.path.isdir(result_dir):
            pass
        else:
            raise

def wget(url, base_url=None, filename=None):
    # WARNING will NOT overwrite
    if base_url:
        log.info('base_url %r', base_url)
    if not filename:
        filename = "./" + os.path.basename(url)
    
    if os.path.exists(filename):
        return

    dirname = os.path.dirname(filename)
    log.debug('dirname %r', dirname)
    if dirname and dirname != '.':
        log.debug('safe mkdir %r', dirname)
        safe_mkdir(dirname)
    log.info("Downloading %s to %s....", url, filename)
    f = urllib2.urlopen(url)
    fout = open(filename,"wb")
    fout.write(f.read())
    fout.close()
    f.close()


def main(argv=None):
    if argv is None:
        argv = sys.argv
    
    print('Python %s on %s' % (sys.version, sys.platform))

    base_url = 'http://barbarian.1987.free.fr/online/'

    wget('http://barbarian.1987.free.fr/online/', filename='index.html')
    wget('http://barbarian.1987.free.fr/online/js/barbarian-60.js', filename='js/barbarian-60.js')

    f = open('js/barbarian-60.js')
    for line in f:
        line = line.strip()
        if 'ressources' in line:
            #log.debug('line %r', line)  # VERBOSE
            if '.src = ' in line:
                if 'AI$' in line:
                    # repeats but with different pallette - ideal would be to use same asset and recolor pallete in memory without needing to download additional resources
                    #print('eval needed', line)
                    log.debug('simple truncate %r', line.split('=')[1])
                    expression_line = line.split('=')[1]
                    expression_line = expression_line.replace('AI$', 'counter').replace(';', '')
                    for counter in range(7+1):
                        counter = str(counter)
                        resource_filename = eval(expression_line, {}, {'counter': counter})
                        #log.debug('url %r', base_url + resource_filename)
                        wget(base_url + resource_filename, filename=resource_filename)
                else:
                    #print('simple truncate', line)
                    #log.debug('simple truncate %r', shlex.shlex(line))
                    #log.debug('simple truncate %r', shlex.split(line))
                    #log.debug('simple truncate %r', line.split('"')[1])
                    resource_filename = line.split('"')[1]
                    #log.debug('url %r', base_url + resource_filename)
                    wget(base_url + resource_filename, filename=resource_filename)
            if 'new Audio(' in line:
                #print('simple parse', line)
                #log.debug('simple parse %r', shlex.split(line))
                #log.debug('simple parse %r', line.split('"')[1])
                resource_filename = line.split('"')[1]
                #log.debug('url %r', base_url + resource_filename)
                wget(base_url + resource_filename, filename=resource_filename)
    f.close()
    
    return 0


if __name__ == "__main__":
    sys.exit(main())
