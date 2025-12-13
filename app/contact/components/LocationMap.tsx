export default function LocationMap() {
  return (
    <div className="bg-surface rounded-xl shadow-lg overflow-hidden border border-border">
      <div className="bg-gradient-to-r from-primary to-secondary p-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h2 className="font-headline text-2xl font-bold text-primary-foreground">
              Visit Our Shop
            </h2>
            <p className="font-body text-sm text-primary-foreground/90">
              Shakarpur, East Delhi
            </p>
          </div>
        </div>
      </div>
      
      <div className="relative h-96 lg:h-[500px] bg-muted">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Krishan Stamps Maker Location - Shakarpur, East Delhi"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=28.6517,77.2865&z=15&output=embed"
          className="border-0"
        />
      </div>
      
      <div className="p-6 bg-muted">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-cta text-sm font-bold text-text-primary">Address</p>
              <p className="font-body text-sm text-text-secondary mt-1">
                Shop No.17, Veer Savarkar Block, Shakarpur, Delhi-110092
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
            </svg>
            <div>
              <p className="font-cta text-sm font-bold text-text-primary">Directions</p>
              <p className="font-body text-sm text-text-secondary mt-1">
                Near Nirman Vihar Metro Station (Blue Line)
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586 8.58 7.165A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-cta text-sm font-bold text-text-primary">Parking</p>
              <p className="font-body text-sm text-text-secondary mt-1">
                Free parking available in front of shop
              </p>
            </div>
          </div>
        </div>
        
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=28.6517,77.2865"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground font-cta font-bold text-sm rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <span>Get Directions</span>
        </a>
      </div>
    </div>
  );
}